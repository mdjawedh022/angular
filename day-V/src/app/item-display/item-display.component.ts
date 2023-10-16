import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItemsFromLocalStorage();
  }
}
class Item {
  name: string = '';
  description: string = '';
  price: number = 0;
}