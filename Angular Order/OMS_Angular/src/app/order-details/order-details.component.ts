import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderId : number
  order : Order

  constructor(private orderServise : OrderService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['orderId'];
    this.order = new Order();
    this.orderServise.getOrderById(this.orderId).subscribe(data =>{
      this.order =data;
    });
  }

}
