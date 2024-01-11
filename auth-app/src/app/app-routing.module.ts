import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { MenComponent } from './men/men.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'hearder',
    component:HeaderComponent
  },
  {path:'seller',
   component:SellerComponent, 
  },
  {
   path:'admin',
   component:AdminComponent,
   canActivate: [authGuard],

  },
  {
  path:'cart',
  component:CartComponent,
  canActivate: [authGuard],
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'men',
    component:MenComponent,
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
