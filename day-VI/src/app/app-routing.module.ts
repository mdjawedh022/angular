import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayItemComponent } from './display-item/display-item.component';
import { DataDisplayComponent } from './data-display/data-display.component';

const routes: Routes = [
  {
    path: '',
    component:DisplayItemComponent,
  },
  {
    path: 'app-data-display',
    component:DataDisplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
