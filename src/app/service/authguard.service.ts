import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (sessionStorage.getItem('currentUser')) {

      return true;
    }

    this.router.navigate(['/login'], { queryParams : {returnUrl: state.url }});
    return false;
  }
}
