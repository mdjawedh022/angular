import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ItemDisplayComponent } from './item-display/item-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HeaderComponent,
    ItemDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
