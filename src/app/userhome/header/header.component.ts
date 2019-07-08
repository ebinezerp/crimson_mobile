import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';

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
    );
  }

}
