import { UserService } from './../user.service';
import { User } from './../WindmillInterfaces/User';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss']
})

export class AdminScreenComponent implements OnInit {

  title = 'appBootstrap';
  users: User[] = [];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userservice.getUsers().subscribe(response => {
      this.users = response;
    });
  }

}
