import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dynamicContent: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      // Here, you can access route parameters and set dynamic content
      this.dynamicContent = params['Home']; // Replace 'paramName' with the actual parameter name you expect
    });
  }
}
