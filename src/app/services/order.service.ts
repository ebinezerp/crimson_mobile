import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../utility/utility';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
    ) { }

  getOrder(orderId: string): Observable<Order> {
    const params = {'orderId': orderId};
    return this.httpClient.get<Order>( URL + 'order', {params});
  }

  getOrders(): Observable<Order[]> {
    const params = {userId: stringify(this.userService.getUser().userId) };
    return this.httpClient.get<Order[]>(URL + 'orders', {params});
  }
}
