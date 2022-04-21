import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  order : Order = new Order();

  constructor(private orderService : OrderService,
    private router : Router) { }

  ngOnInit(): void {
  }

  buyItem(){
    this.orderService.saveOrder(this.order).subscribe(data =>{
      console.log(data);
      this.goToItemList();
    })
  }

  goToItemList(){
    this.router.navigate(['/items']);
  }

  onSubmit(){
    console.log(this.order);
    this.buyItem();
  }
}
