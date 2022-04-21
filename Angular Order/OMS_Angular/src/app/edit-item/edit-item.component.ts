import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  items : Item[];

  constructor(private itemService : ItemService,
    private router : Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(){
    this.itemService.getItemList().subscribe(data =>{
      this.items = data;
    })
  }

  additem(){
    this.router.navigate(['add-item']);
  }

  updateItem(itemId : number){
    this.router.navigate(['update-item',itemId]);
  }

  deleteItem(itemId : number){
    this.itemService.deleteItem(itemId).subscribe(data =>{
      console.log(data);
      this.getItems();
    })
  }

}
