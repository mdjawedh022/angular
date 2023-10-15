import { Component } from '@angular/core';

@Component({
  selector: 'app-item-service',
  templateUrl: './item-service.component.html',
  styleUrls: ['./item-service.component.css'],
})
export class ItemServiceComponent {
  items: Array<{
    img: string;
    name: string;
    description: string;
    price: number;
    category: string;
  }> = [
    {
      img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Iphone 15',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 100,
      category: 'Electronics',
    },
    {
      img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'T-shirt',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 50,
      category: 'Clothing',
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: 'Bed',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 200,
      category: 'Furniture',
    },
    {
      img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Iphone 15 pro max',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 100,
      category: 'Electronics',
    },
    {
      img:"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'shirt',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 50,
      category: 'Clothing',
    },
    {
      img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'Chairs',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 200,
      category: 'Furniture',
    },
    { 
      img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Iphone 15',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 100,
      category: 'Electronics',
    },
    {
      img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'T-shirt',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 50,
      category: 'Clothing',
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: 'Bed',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 200,
      category: 'Furniture',
    },
    {
      img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
       name: 'Iphone 15 pro max',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 100,
      category: 'Electronics',
    },
    {
      img:"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'shirt',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 50,
      category: 'Clothing',
    },
    {
      img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'Chairs',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 200,
      category: 'Furniture',
    },
    {
      img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
       name: 'Iphone 15',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 100,
      category: 'Electronics',
    },
    {
      img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'T-shirt',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 50,
      category: 'Clothing',
    },
    {
     img:"https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
     name: 'Bed',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 200,
      category: 'Furniture',
    },
    {
      img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
       name: 'Iphone 15 pro max',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 100,
      category: 'Electronics',
    },
    {
      img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'Chairs',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 200,
      category: 'Furniture',
    },
    {
      img:"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'shirt',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 50,
      category: 'Clothing',
    },
    {
      img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: 'Chairs',
     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto maxime voluptates natus voluptatum laborum vel, corporis veniam sunt, placeat ipsum perspiciatis delectus eveniet, ab rem distinctio corrupti error minima laudantium!",
      price: 200,
      category: 'Furniture',
    },
  ];

  selectedCategory:string='';

  filteredItems:Array<{
    img: string;
    name: string;
    description: string;
    price: number;
    category: string;
  }>=[]

  constructor() {
    // Initialize the filteredItems array with all items initially
    this.filteredItems = this.items;
  }

  onSelectCategory(category: string) {
    // Update the selected category when a radio button is selected
    this.selectedCategory = category;
    if (this.selectedCategory === 'All') {
      // If 'All' is selected, show all items
      this.filteredItems = this.items;
    } else if (this.selectedCategory === '') {
      // If no category is selected, show all items
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter((item) => item.category === this.selectedCategory);
    }
  }
}