import { Injectable } from '@angular/core';
import { Observable, of, delay, tap} from 'rxjs';
import { User } from '../WindmillInterfaces/User';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService){}

  isLoggedIn = 0;

  redirectUrl: string | null = null;

  login(): Observable<number> {

    if(this.userService.)
    return of (1).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = 1)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
