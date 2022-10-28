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
    const observable = this.userService.getUsers();
    observable.subscribe(response => {
      console.log(response)
    });
    this.router.navigate(['/works']);
  }

}
