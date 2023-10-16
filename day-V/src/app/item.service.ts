import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItemsFromLocalStorage():Item[]{
    const storageItems=localStorage.getItem('items');
    if(storageItems){
      return JSON.parse(storageItems)
    }
    return []
  }
}
class Item {
  name: string = '';
  description: string = '';
  price: number = 0;
}
