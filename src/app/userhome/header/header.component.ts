import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  cart: Cart;

  constructor(
    private userService: UserService,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.getCart().subscribe(
      (cart) => {
        this.cart = cart;
      }
    )
  }

}
