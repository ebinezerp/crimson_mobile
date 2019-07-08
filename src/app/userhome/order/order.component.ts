import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  order: Order;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private orderService: OrderService
    ) {
      this.order = new Order();
    }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
      this.orderService.getOrder(params['id']).subscribe(
        (order) => {
          this.order = order;
        }
      );
    });
  }

}
