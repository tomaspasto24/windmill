import { Injectable } from '@angular/core';
import { Observable, of, delay, tap} from 'rxjs';
import { UserService } from '../user.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService, private sessionService: SessionService){}

  redirectUrl: string | null = null;
  isLoggedIn!: '';
  login(): void {
    this.sessionService.saveData('isLoggedIn', 'true');
    this.userService.saveUser();
  }

  logout(): void {
    this.sessionService.clearData();
    window.location.href = 'http://localhost:4200/login';
  }
}
