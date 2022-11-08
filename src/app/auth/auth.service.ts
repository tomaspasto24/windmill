import { Injectable } from '@angular/core';
import { Observable, of, delay, tap} from 'rxjs';
import { UserService } from '../user.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService, private localService: LocalService){}

  redirectUrl: string | null = null;
  isLoggedIn!: '';
  login(): void {
    this.localService.saveData('isLoggedIn', 'true');
    this.userService.saveUser();
  }

  logout(isLoggedIn: boolean): void {
    isLoggedIn = false;
  }
}
