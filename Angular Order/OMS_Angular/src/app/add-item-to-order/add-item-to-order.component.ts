import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Item } from '../item';

@Component({
  selector: 'app-add-item-to-order',
  templateUrl: './add-item-to-order.component.html',
  styleUrls: ['./add-item-to-order.component.css']
})
export class AddItemToOrderComponent implements OnInit {

  orderId : number
  itemId : number
  item : Item = new Item();
  order : Order = new Order();

  constructor(private orderService : OrderService, private itemService : ItemService,private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['itemId'];
    
    this.itemService.getItemById(this.itemId).subscribe(data =>{
      console.log(data);
      this.item = data;
    },error => console.log(error));
   
  }

  goToItemList(){
    this.router.navigate(['/items']);
  }

  onSubmit(){
    this.orderService.addItemToOrder(this.itemId,this.orderId).subscribe(data =>{
      console.log(data);
      this.goToItemList();
    },error => console.log(error));
  }

}
