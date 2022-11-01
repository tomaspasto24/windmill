import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivate1(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree{
    if (this.authService.isLoggedIn >= 1){
      return true;
    }

    this.authService.logout();

    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivate2(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree{
    if (this.authService.isLoggedIn >= 2){
      return true;
    }

    this.authService.logout();

    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivate3(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree{
    if (this.authService.isLoggedIn === 3){
      return true;
    }

    this.authService.logout();

    const url: string = state.url;

    return this.checkLogin(url);
  }
    
  
  checkLogin(url: string): true|UrlTree{
    if (this.authService.isLoggedIn != -1){
      return true; 
    }

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }

}
