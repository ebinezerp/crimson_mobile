import { Component, OnInit } from '@angular/core';
import { Cartitem } from 'src/app/model/cartitem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {


  cartItems: Cartitem[];
  totalAmount: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.getCart().subscribe(
      (cart) => {
        this.totalAmount = cart.totalAmount;
        this.cartItems = cart.cartItems;
      }
    );
  }

}
