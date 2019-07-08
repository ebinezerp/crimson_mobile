import { Component, OnInit, Input } from '@angular/core';
import { Cartitem } from 'src/app/model/cartitem';
import { imageURL } from 'src/app/utility/utility';
import { CartService } from 'src/app/services/cart.service';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss'],
})
export class CartitemComponent implements OnInit {

  @Input() cartItem: Cartitem;
  imageURL: string;

  constructor(
    private cartService: CartService,
    private cartItemService: CartItemService
  ) {
    this.imageURL = imageURL;
  }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.increaseExistingItemInCart(this.cartItem);
  }

  removeFromCart() {
    if (this.cartItem.quantity > 1) {
      this.cartService.decreaseExistingItemInCart(this.cartItem);
    } else {
      this.cartService.removeItemFromCart(this.cartItem);
    }
  }

}
