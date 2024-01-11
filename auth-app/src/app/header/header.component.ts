import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHamburger=false;
  isMobileMenuVisible = false;
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = '';
  searchResults: product[] | undefined;
  constructor(private route: Router, ){}
  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
  toggleMenu(){
   this.isHamburger = !this.isHamburger;
  }
  ngOnInit() {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let data = localStorage.getItem('seller');
          let sellerData = data && JSON.parse(data);
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        } else if (localStorage.getItem('user')) {
          let data = localStorage.getItem('user');
          let userData = data && JSON.parse(data);
          this.userName = userData.name;
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    })
  }

  logOut() {
    if (this.menuType === 'user' || this.menuType === 'seller') {
      localStorage.removeItem(this.menuType);
      this.route.navigate(['/']);
    }
  }

}