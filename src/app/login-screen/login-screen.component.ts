import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
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
    console.log(this.userService.user?.role);
    const observable = this.userService.auth(email, password);
    observable.subscribe(response => {
      if(response.error) {
        alert(response.error);
      } else {
        this.userService.setUserToken({
          _id: response.userData._id,
          name: response.userData.name,
          role: response.userData.rol,
          password: response.userData.password
        }, response.token);
        this.authService.login();
        this.router.navigate(['/works']);
      }
    });
  }

  resetPassword() {
    this.router.navigate(['/getemail-password']);
  }

}
