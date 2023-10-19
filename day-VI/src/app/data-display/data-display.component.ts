import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit{


  fetchedData:any;

  constructor(private dataService:DataServiceService){}


  ngOnInit(){
this.dataService.fetchData().subscribe((data:any)=>{
  this.fetchedData=data;
  console.log(data);
  
})
  }
}
