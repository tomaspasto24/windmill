import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-abm-piezas-screen',
  templateUrl: './abm-piezas-screen.component.html',
  styleUrls: ['./abm-piezas-screen.component.scss']
})
export class AbmPiezasScreenComponent implements OnInit {
  faBars = faFilter;

  constructor() { }

  ngOnInit(): void {
  }

}
