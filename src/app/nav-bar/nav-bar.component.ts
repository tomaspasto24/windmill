import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faRightFromBracket = faRightFromBracket;
  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }
}
