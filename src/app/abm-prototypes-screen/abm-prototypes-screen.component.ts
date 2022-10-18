import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abm-prototypes-screen',
  templateUrl: './abm-prototypes-screen.component.html',
  styleUrls: ['./abm-prototypes-screen.component.scss']
})
export class AbmPrototypesScreenComponent implements OnInit {
  faBars = faFilter
  constructor() { }

  ngOnInit(): void {
  }

}
