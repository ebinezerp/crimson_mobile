import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from 'src/app/model/order-item';
import { imageURL } from 'src/app/utility/utility';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {

 @Input() orderItem: OrderItem;
 imageURL: string;

  constructor() {
    this.imageURL = imageURL;
   }

  ngOnInit() {}

}
