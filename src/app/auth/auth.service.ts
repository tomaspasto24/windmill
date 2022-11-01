import { Injectable } from '@angular/core';
import { Observable, of, delay, tap} from 'rxjs';
import { User } from '../WindmillInterfaces/User';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService){}

  isLoggedIn = -1;

  redirectUrl: string | null = null;

  login(): Observable<number> {

    console.log(this.userService.user!.role);
    
    if (this.userService.user!.role === 0){
      return of (1).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = 0)
      );
    }
    if (this.userService.user!.role === 2){
      return of (2).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = 2)
      );
    }
    if (this.userService.user!.role === 3){
      return of (3).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = 3)
      );
    }

    return of (-1).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = -1)
    );
  }

  logout(): void {
    this.isLoggedIn = -1;
  }
}
