import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Cartitem } from 'src/app/model/cartitem';
import { imageURL } from 'src/app/utility/utility';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItemService } from 'src/app/services/cart-item.service';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-mainpageproduct',
  templateUrl: './mainpageproduct.component.html',
  styleUrls: ['./mainpageproduct.component.scss'],
})
export class MainpageproductComponent implements OnInit {

  @Input() product: Product;
  imageUrl: string;
  private cartItems: Cartitem[];
  cartItem: Cartitem;
  isAddedToCart: boolean = false;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private cartService: CartService,
    private cartItemService: CartItemService
  ) {
    this.imageUrl = imageURL;
  }

  ngOnInit() {
   this.cartService.getCart().subscribe(
      (cart) => {
        for (const cartItem of cart.cartItems) {
          if (cartItem.product.id === this.product.id) {
            this.cartItem = cartItem;
            this.isAddedToCart = true;
            break;
          } else {
            this.isAddedToCart = false;
          }
        }

        if (cart.cartItems.length === 0) {
          this.isAddedToCart = false;
        }
      }
    );
  }

  addToCart() {
    if (this.cartItem === undefined) {
      const cartItem = this.cartItemService.createCartItem(this.product.id);
      this.cartService.addNewItemToCart(cartItem);
    } else {
      this.cartService.increaseExistingItemInCart(this.cartItem);
    }
  }

  removeFromCart() {
     if (this.cartItem.quantity > 1) {
        this.cartService.decreaseExistingItemInCart(this.cartItem);
     } else {
        this.cartService.removeItemFromCart(this.cartItem);
     }
  }
}
