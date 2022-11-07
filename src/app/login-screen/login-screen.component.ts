import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    const observable = this.userService.auth(email, password);
    observable.subscribe(response => {
      if(response.error) {
        alert(response.error);
      } else {
        this.userService.setUserToken(response.userData, response.token);
        this.router.navigate(['/works']);
        this.authService.login();
      }
    });

  }

  resetPassword() {
    this.router.navigate(['/getemail-password']);
  }

}
