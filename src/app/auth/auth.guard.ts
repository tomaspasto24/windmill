import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SessionService } from './session.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService, private router: Router, private userService: UserService, private sessionService: SessionService){}

  user = this.userService.user;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    console.log(url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): true|UrlTree{
    if (this.sessionService.getData('isLoggedIn') === 'true'){
      if ((url === '/admin' || url === '/prototypes' || url === '/prototype-detail/:id') && this.sessionService.getData('role') === '3'){
        return true;
      }
      else if (url === '/works' && (this.sessionService.getData('role') === '2' || this.sessionService.getData('role') === '3')){
        return true;
      }
      else if (url === '/pieces' && (this.sessionService.getData('role') === '1' ||this.sessionService.getData('role') === '2' || this.sessionService.getData('role') === '3'))
      {
        return true;
      }
    }

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }

  canActivateUser(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    console.log(url);
    return this.checkLogin(url);
  }

  checkLoginUser(url: string): true|UrlTree{
    if (this.sessionService.getData('isLoggedIn') === 'true'){
      if (this.sessionService.getData('role')! >= '1'){
        return true;
      }
    }

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }

  canActivateAuditor(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    console.log(url);
    return this.checkLogin(url);
  }

  checkLoginAuditor(url: string): true|UrlTree{
    if (this.sessionService.getData('isLoggedIn') === 'true'){
      if (this.sessionService.getData('role')! >= '2'){
        return true;
      }
    }

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }
}
