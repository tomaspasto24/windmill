import { UserService } from './../user.service';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../auth/session.service';
@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private userService: UserService, private sessionService: SessionService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Bearer ${this.sessionService.getData('jwt')}`);
    const headers = new HttpHeaders({
      'authorization': `Bearer ${this.sessionService.getData('jwt')}`
    })
    const reqClone = req.clone({
      headers
    }); 
    
    return next.handle(reqClone);
  }
}
