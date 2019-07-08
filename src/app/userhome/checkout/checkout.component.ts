import { Component, OnInit } from '@angular/core';
import { OrderReciever } from 'src/app/model/order-receiver';
import { NgForm } from '@angular/forms';
import { OrderReceiverService } from 'src/app/services/order-receiver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  orderReciever: OrderReciever;

  constructor(
    private orderReceiverService: OrderReceiverService,
    private router: Router) {
    this.orderReciever = new OrderReciever();
   }

  ngOnInit() {}

  submit(orderReceiverForm: NgForm) {
    this.orderReceiverService.submit(this.orderReciever).subscribe(
      (order) => {
        this.orderReceiverService.orderReceiverObservable.subscribe(
          (orderReciever) => {
              this.router.navigate(['/userhome/order', order.orderId]).then(
                () => orderReceiverForm.reset()
              );
          });
      }
    );
  }

}
