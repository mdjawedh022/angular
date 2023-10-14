import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  items: Array<{ name: string, description: string, price: number, category: string }> = [
    { name: 'Iphone 15', description: 'Description 1', price: 100, category: 'Electronics' },
    { name: 'T-shirt', description: 'Description 2', price: 50, category: 'Clothing' },
    { name: 'Bed', description: 'Description 3', price: 200, category: 'Furniture' },
    { name: 'Iphone 15 pro max', description: 'Description 1', price: 100, category: 'Electronics' },
    { name: 'shirt', description: 'Description 2', price: 50, category: 'Clothing' },
    { name: 'Chairs', description: 'Description 3', price: 200, category: 'Furniture' },
  
  ];
  searchQuery: string = '';
  results: any[] = [];
  selectedCategory: string = '';


  constructor() {}

  ngOnInit() {
    // Initialize the results array with all items when the component is initialized
    this.results = this.items;
  }
  onSearch() {
    // Filter the items based on the search query
    if (this.searchQuery || this.selectedCategory) {
      this.results = this.items.filter(item => 
        (item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
        (this.selectedCategory === '' || item.category === this.selectedCategory)
     
    );
  } else {
    // If there's no search query and no category selected, display all items
    this.results = this.items;
  }
  }
  
  onSelectCategory(category: string) {
    this.selectedCategory = category;
    this.onSearch(); // Re-run the search when a category is selected
  }
}

