import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  newItem: string = ''; // This property is bound to the input field
  items: { text: string, editing: boolean }[] = [];


  constructor() {
    // Initialize items with some initial data
    this.items = [
      { text: 'Task 1', editing: false },
      { text: 'Task 2', editing: false },
      { text: 'Task 3', editing: false }
    ];
  }
  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push({ text: this.newItem, editing: false });
      this.newItem = ''; // Clear the input field
    }
  }

  editItem(item: { text: string, editing: boolean }) {
    item.editing = true;
  }

  saveItem(item: { text: string, editing: boolean }) {
    item.editing = false;
  }

  removeItem(item: { text: string, editing: boolean }) {
    const i = this.items.indexOf(item);
    if (i !== -1) {
      this.items.splice(i, 1);
    }
  }
}