import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../model/product';
import { Cartitem } from '../model/cartitem';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(
    private productService: ProductService) { }

  createCartItem(productId: number) {
    const product: Product = this.productService.getProduct(productId);
    const cartItem: Cartitem = new Cartitem();
    cartItem.product = product;
    cartItem.quantity = 1;
    cartItem.unitPrice = product.price;
    cartItem.totalPrice = cartItem.quantity * product.price;
    return cartItem;
  }

  updateCartItem(cartItem: Cartitem, quantity: number) {
    cartItem.quantity = cartItem.quantity + quantity;
    cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;
  }

  deleteCartItem(productId: number) {
    const product: Product = this.productService.getProduct(productId);
  }
}
