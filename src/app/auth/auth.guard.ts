import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../WindmillInterfaces/User';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService, private router: Router, private userService: UserService){}

  user = this.userService.user;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  
  checkLogin(url: string): true|UrlTree{
    if (this.user != undefined){
      
      console.log(this.user.role == 3);
      if (this.user.role == 3){
        return true; 
      }
    }

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }

}
