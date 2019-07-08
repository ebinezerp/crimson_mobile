import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderReciever } from '../model/order-receiver';
import { Observable, BehaviorSubject } from 'rxjs';
import { Order } from '../model/order';
import { UserService } from './user.service';
import { stringify } from '@angular/compiler/src/util';
import { URL } from '../utility/utility';

@Injectable({
  providedIn: 'root'
})
export class OrderReceiverService {

  private orderReciever: OrderReciever;
  private orderReceiverSubject = new BehaviorSubject<OrderReciever>(undefined);
  public orderReceiverObservable = this.orderReceiverSubject.asObservable();

  constructor(private httpClient: HttpClient, private userService: UserService) {
   }

  setOrderReceiver(orderReciever: OrderReciever) {
    this.orderReciever = orderReciever;
    this.orderReceiverSubject.next(this.orderReciever);
  }

  getOrderReceiver(): OrderReciever {
    return this.orderReciever;
  }

  submit(orderReciever: OrderReciever): Observable<Order> {
    const params = {
      userId: stringify(this.userService.getUser().userId)
    };
    return this.httpClient.post<Order>(URL + 'order', orderReciever, {params});
  }
}
