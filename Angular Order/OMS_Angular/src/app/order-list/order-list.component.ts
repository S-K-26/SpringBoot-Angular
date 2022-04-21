import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders : Order[];

  constructor(private orderService : OrderService,
    private router : Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders(){
    this.orderService.getOrderList().subscribe(data =>{
      this.orders = data;
    })
  }

  deleteOrder (orderId : number){
    this.orderService.deleteOrder(orderId).subscribe(data =>{
      console.log(data);
      this.getOrders();
    })
  }

  orderDetails(orderId : number){
    this.router.navigate(['order-details',orderId]);
  }

}
