import { Component } from '@angular/core';
import { ExternalApiServiceService } from '../external-api-service.service';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent {
dataAppend:any;
  constructor(private externalApiService:ExternalApiServiceService){}

ngOnInit(){
  this.externalApiService.dataFectch().subscribe((data:any)=>{
this.dataAppend=data;
console.log(data);

  })
}
}
