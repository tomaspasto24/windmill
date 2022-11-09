import { Component, OnInit} from '@angular/core';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { Router, Routes, NavigationEnd } from '@angular/router'
import { Location } from '@angular/common';
import { AbmPrototypesScreenComponent } from '../abm-prototypes-screen/abm-prototypes-screen.component';
import { Windmill } from '../WindmillInterfaces/Windmill';
@Component({
  selector: 'app-prototype-card',
  templateUrl: './prototype-card.component.html',
  styleUrls: ['./prototype-card.component.scss']
})


export class PrototypeCardComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit(): void {
  }

  faWrong = faSquareXmark;
  faCheck = faSquareCheck;

  windmill: Windmill | undefined = undefined;
}