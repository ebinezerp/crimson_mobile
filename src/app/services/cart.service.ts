import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Product } from '../model/product';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cartitem } from '../model/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartBehaviourSubject: BehaviorSubject<Cart>;
  private cart: Cart;
  constructor(
    private userService: UserService
  ) {
    this.cart = userService.getUser().cart;
    this.cartBehaviourSubject = new BehaviorSubject<Cart>(this.cart);
  }

  getCart(): Observable<Cart> {
    return this.cartBehaviourSubject.asObservable();
  }

  updateCart() {
    this.cartBehaviourSubject.next(this.cart);
  }


  addItemToCart(cartItem: Cartitem) {
    if (this.cart.cartItems === undefined) {
      this.cart.cartItems = [];
    }
    this.cart.cartItems.push(cartItem);
    this.cart.quantity = this.cart.quantity + 1;
    this.cart.totalAmount = this.cart.totalAmount + cartItem.product.price;
    this.updateCart();
  }
  removeItemFromCart(cartItem: Cartitem) {
    const index: number = this.cart.cartItems.indexOf(cartItem);
    if (index !== -1) {
        this.cart.cartItems.splice(index, 1);
    }
    this.updateCart();
  }


  getCartItem(productId: number): Cartitem {

    return this.cart.cartItems.find((cartItem) => {
      if (cartItem.product.id === productId) {
        return true;
      }
    });

  }
}
