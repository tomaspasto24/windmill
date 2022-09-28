import { Component, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-prototype-detail-screen',
  templateUrl: './prototype-detail-screen.component.html',
  styleUrls: ['./prototype-detail-screen.component.scss']
})
export class PrototypeDetailScreenComponent implements OnInit {

  faCircleCheck = faCircleCheck
  constructor() { }

  ngOnInit(): void {
  }

}
