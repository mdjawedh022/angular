import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDisplayComponent } from './item-display/item-display.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'app-item-display', component: ItemDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
