import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { imageURL } from '../../utility/utility';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { Cartitem } from 'src/app/model/cartitem';
import { CartItemService } from 'src/app/services/cart-item.service';

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
           console.log('executing');
           this.assignCartItem(cart).then(
             () => console.log(this.cartItem.quantity)
           );
      }
    );
  }

  addToCart() {
    console.log('added to card');
    let cartItem: Cartitem = this.cartService.getCartItem(this.product.id);
    if (cartItem === undefined) {
        cartItem = this.cartItemService.createCartItem(this.product.id);
    } else {
      this.cartItemService.updateCartItem(this.cartItem, 1);
    }
    this.cartService.addItemToCart(cartItem);
  }

  removeFromCart() {
  }

  assignCartItem(cart): Promise<void> {
    return new Promise(() => {
      this.cartItem = cart.cartItems.find((cartItem) => {
        if (this.product.id === cartItem.product.id) {
          return true;
        }
     });
    });
  }

}
