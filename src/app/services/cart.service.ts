import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Product } from '../model/product';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cartitem } from '../model/cartitem';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL } from '../utility/utility';
import { stringify } from '@angular/compiler/src/util';
import { CartItemService } from './cart-item.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartBehaviourSubject: BehaviorSubject<Cart>;
  private cart: Cart;
  constructor(
    private userService: UserService,
    private cartItemService: CartItemService,
    private httpClient: HttpClient
  ) {
    this.cart = userService.getUser().cart;
    this.cartBehaviourSubject = new BehaviorSubject<Cart>(this.cart);
  }

  getCart(): Observable<Cart> {
    return this.cartBehaviourSubject.asObservable();
  }

  updateCart(cart: Cart) {
    this.cartBehaviourSubject.next(this.cart);
  }


  addNewItemToCart(cartItem: Cartitem) {
    if (this.cart.cartItems === undefined) {
      this.cart.cartItems = [];
    }
    this.cart.cartItems.push(cartItem);
    this.increaseExistingItemInCart(cartItem);
  }

  increaseExistingItemInCart(cartItem: Cartitem) {
    const params = {
      productId : stringify(cartItem.product.id),
      userId : stringify(this.userService.getUser().userId)
    };
    this.httpClient.post<Cart>(URL + 'addtocart', '', {params}).subscribe(
      (data) => {
          console.log(data);
          this.cart = data;
          this.updateCart(data);
      }
    );
  }

  decreaseExistingItemInCart(cartItem: Cartitem) {
    const params = {
      productId : stringify(cartItem.product.id),
      userId : stringify(this.userService.getUser().userId)
    };
    this.httpClient.post<Cart>(URL + 'deletefromcart', '', {params}).subscribe(
      (data) => {
          this.cart = data;
          this.updateCart(data);
      }
    );
  }

  removeItemFromCart(cartItem: Cartitem) {
    const index: number = this.cart.cartItems.indexOf(cartItem);
    if (index !== -1) {
        this.cart.cartItems.splice(index, 1);
    }
    this.decreaseExistingItemInCart(cartItem);
    // this.cart.quantity = this.cart.quantity - 1;
    // this.cart.totalAmount = this.cart.totalAmount - cartItem.totalAmount;
    // this.updateCart();
  }


  getCartItem(productId: number): Cartitem {

    return this.cart.cartItems.find((cartItem) => {
      if (cartItem.product.id === productId) {
        return true;
      }
    });

  }
}
