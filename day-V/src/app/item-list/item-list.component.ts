import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  newItemName: string = '';
  newItemDescription: string = '';
  newItemPrice: number = 0;
  items: Item[] = [];
  submitted: boolean = false;
  constructor() {
    // Load items from local storage when the component is created
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }
  isNotANumber(value: any): boolean {
    return isNaN(Number(value));
  }
  addItems() {
    this.submitted = true;
    // Input validation
    if (!this.newItemName || isNaN(this.newItemPrice) || this.newItemPrice <= 0) {
      // Handle validation error (e.g., display an error message)
      return;
    }

    if (this.newItemDescription && this.newItemDescription.length > 100) {
      // Handle validation error (e.g., display an error message)
      return;
    }
  
    if (isNaN(Number(this.newItemPrice)) || Number(this.newItemPrice) <= 0) {
      // Handle validation error
      return;
    }
    
    // Create a new item object and add it to the 'items' array
    const newItem: Item = {
      name: this.newItemName,
      description: this.newItemDescription,
      price: this.newItemPrice
    };

    this.items.push(newItem);

    // Save items to local storage
    localStorage.setItem('items', JSON.stringify(this.items));

    // Clear the form fields after submission
    this.newItemName = '';
    this.newItemDescription = '';
    this.newItemPrice = 0;

    // Display the updated 'items' array in the console
    console.log(this.items);
  }
}

class Item {
  name: string = '';
  description: string = '';
  price: number = 0;
}
