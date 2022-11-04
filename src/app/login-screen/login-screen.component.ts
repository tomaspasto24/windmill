import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    const observable = this.userService.auth(email, password);
    observable.subscribe(response => {
      if(response.error) {
        alert(response.error);
      } else {
        console.log(response)
        this.userService.setUserToken(response.userData, response.token);
        console.log(this.userService.token)
        console.log(this.userService.user)
        this.router.navigate(['/works']);
      }
    });

  }

  resetPassword() {
    this.router.navigate(['/getemail-password']);
  }

}
