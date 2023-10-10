import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter with angular';
  count=0;
  counter(type:string){
   type==='add'?this.count++:this.count--;
   this.count===0
  }
}
