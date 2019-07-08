import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { imageURL } from '../../utility/utility';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { Cartitem } from 'src/app/model/cartitem';
import { CartItemService } from 'src/app/services/cart-item.service';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  product: Product;
  imageURL = imageURL;
  quantity: number = 1;
  cartItem: Cartitem;
  isAddedToCart: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private cartService: CartService,
    private cartItemService: CartItemService) { }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.product = this.productService.getProduct(id);
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
