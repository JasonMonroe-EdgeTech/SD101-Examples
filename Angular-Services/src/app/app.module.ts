import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent}  from './app.component';
import {DataService} from './data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent ],
  providers: [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
