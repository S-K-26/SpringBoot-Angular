import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemToOrderComponent } from './add-item-to-order/add-item-to-order.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [
  {path : 'items',component : ItemListComponent},
  {path : 'add-item', component : AddItemComponent},
  {path : 'edit-item', component : EditItemComponent},
  {path : 'update-item/:itemId', component : UpdateItemComponent},
  {path : '', redirectTo : 'items',pathMatch : 'full'},
  {path : 'orders', component : OrderListComponent},
  {path : 'order-details/:orderID', component : OrderDetailsComponent},
  {path : 'add-order',component : AddOrderComponent},
  {path : 'add-item-order/:itemId', component : AddItemToOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
