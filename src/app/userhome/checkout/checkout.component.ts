import { Component, OnInit } from '@angular/core';
import { OrderReciever } from 'src/app/model/order-receiver';
import { NgForm } from '@angular/forms';
import { OrderReceiverService } from 'src/app/services/order-receiver.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  orderReciever: OrderReciever;

  constructor(
    private orderReceiverService: OrderReceiverService,
    private router: Router,
    private cartService: CartService,
    private userService: UserService,
    private orderRecieverService: OrderReceiverService) {
    this.orderReciever = new OrderReciever();
   }

  ngOnInit() {
    const user = this.userService.getUser();
    this.orderReceiverService.getLastOrderReceiver(user.userId).subscribe(
      (orderReciever) => {
        console.log(orderReciever);
        if (orderReciever != null && orderReciever !== undefined) {
          this.orderReciever = orderReciever;
        }
      }
    );
  }

  submit(orderReceiverForm: NgForm) {
    this.orderReceiverService.submit(this.orderReciever).subscribe(
      (order) => {
        this.orderReceiverService.orderReceiverObservable.subscribe(
          (orderReciever) => {
              this.router.navigate(['/userhome/order', order.orderId]).then(
                () => orderReceiverForm.reset()
              );
          });
        this.cartService.reset();
      }
    );
  }

}
