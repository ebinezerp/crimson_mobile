import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../utility/utility';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrder(orderId: string): Observable<Order> {
    const params = {'orderId': orderId};
    return this.httpClient.get<Order>( URL + 'order', {params});
  }
}
