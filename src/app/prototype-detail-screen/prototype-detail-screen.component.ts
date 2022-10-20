import { Component, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { PrototypeCardComponent } from '../prototype-card/prototype-card.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-prototype-detail-screen',
  templateUrl: './prototype-detail-screen.component.html',
  styleUrls: ['./prototype-detail-screen.component.scss']
})
export class PrototypeDetailScreenComponent implements OnInit {

  faCircleCheck = faCircleCheck;
  faCircleArrowLeft = faCircleArrowLeft;
  faCircleXMark = faCircleXmark;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
  }

    backclicked() {
    this.location.back();
  }

  id : any = this.route.snapshot.paramMap.get('id');

}


