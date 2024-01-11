import { CanActivateFn } from '@angular/router';
import { SellerService } from './seller.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const seller=inject(SellerService);

  if(localStorage.getItem('seller' )){
    return true;
  }
  return seller.isLoggedIn;
};
