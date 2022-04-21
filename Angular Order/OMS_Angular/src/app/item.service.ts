import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseURL = "http://localhost:8080/items";

  constructor(private httpClient : HttpClient) { }

  getItemList() : Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseURL}`);
  }

  addItemToList(item :Item) : Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,item);
  }

  getItemById(itemId : number) : Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseURL}/${itemId}`);
  }

  updateItem (itemId : number, item : Item) : Observable<object>{
    return this.httpClient.put<Item>(`${this.baseURL}/${itemId}`,item);
  }

  deleteItem(itemId : number) : Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${itemId}`);
  }
}
