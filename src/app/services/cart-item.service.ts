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
    private productService: ProductService,
    private cartService: CartService) { }

  createCartItem(productId: number) {
    const product: Product = this.productService.getProduct(productId);
    product.isAddedToCart = true;
    const cartItem: Cartitem = new Cartitem();
    cartItem.product = product;
    cartItem.quantity = 1;
    cartItem.unitPrice = product.price;
    cartItem.totalAmount = cartItem.quantity * product.price;
    return cartItem;
  }

  updateCartItem(cartItem: Cartitem, quantity: number) {
    cartItem.quantity = cartItem.quantity + quantity;
    cartItem.totalAmount = cartItem.quantity * cartItem.unitPrice;
    console.log(cartItem);
  }
}
