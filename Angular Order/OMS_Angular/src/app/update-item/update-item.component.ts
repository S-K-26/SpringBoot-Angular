import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  itemId : number;
  item : Item = new Item();

  constructor(private itemService : ItemService,
    private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['itemId'];

    this.itemService.getItemById(this.itemId).subscribe(data =>{
      console.log(data);
      this.item = data;
    },error => console.log(error));
    
  }

  goToItemList(){
    this.router.navigate(['/edit-item']);
  }

  onSubmit(){
    this.itemService.updateItem(this.itemId,this.item).subscribe(data =>{
      this.goToItemList();
    },error => console.log(error));
  }

}
