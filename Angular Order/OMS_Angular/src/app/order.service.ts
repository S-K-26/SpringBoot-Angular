import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderURL = "http://localhost:8080/orders";

  constructor(private httpClient : HttpClient) { }

  getOrderList() : Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.orderURL}`);
  }

  deleteOrder(orderId : number) : Observable<object>{
    return this.httpClient.delete(`${this.orderURL}/${orderId}`);
  }

  getOrderById(orderId : number) : Observable<Order>{
    return this.httpClient.get<Order>(`${this.orderURL}/${orderId}`);
  }

  saveOrder(order : Order) : Observable<object>{
    return this.httpClient.post(`${this.orderURL}`,order);
  }

  addItemToOrder(orderId : number,itemId : number) : Observable<object>{
    return this.httpClient.put<Order>(`${this.orderURL}/${orderId}/${itemId}`,Order);
  }
}
