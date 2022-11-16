import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { SessionService } from '../auth/session.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faRightFromBracket = faRightFromBracket;
  constructor(public router: Router, private authService: AuthService, private sessionService: SessionService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }

  isAuditorOrAdmin(){
    if (this.sessionService.getData('role') === '2' || this.sessionService.getData('role') === '3'){
      return true;
    }
    return false;
  }
   isAdmin(){
    if (this.sessionService.getData('role') === '3'){
      return true;
    }
    return false;
   }
}
