import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items : Item[];
  order : Order = new Order();

  constructor(private itemService : ItemService,private orderService : OrderService,
    private  router : Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(){
    this.itemService.getItemList().subscribe(data =>{
      this.items = data;
    })
  }

  buyItem(){
    this.router.navigate(['add-order']);
  }

  addToOrder(){
    this.router.navigate(['add-item-order/:itemId']);
  }
}
