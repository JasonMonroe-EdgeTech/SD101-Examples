import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MyDataObject} from './data';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  template: `<div *ngIf="myData">
                  <h2>{{myData.title}}</h2>
                  <h2>{{myData.body}}</h2>
             </div>
             `
})
export class AppComponent implements OnInit{
   myData: MyDataObject;

   constructor(private dataService: DataService){}


  getData(): void{
    this.dataService.getData().then(myData=>{
      this.myData = myData});
  }

   ngOnInit(): void{
     this.getData();
   }

 }
