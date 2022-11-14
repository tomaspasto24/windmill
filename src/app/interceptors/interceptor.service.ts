import { UserService } from './../user.service';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Bearer ${this.userService.getToken()}`);
    const headers = new HttpHeaders({
      'authorization': `Bearer ${this.userService.getToken()}`
    })
    const reqClone = req.clone({
      headers
    }); 
    
    return next.handle(reqClone);
  }
}
