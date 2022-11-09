import { Component, OnInit, Input } from '@angular/core';
import { Windmill } from '../WindmillInterfaces/Windmill';
@Component({
  selector: 'app-approved-screen',
  templateUrl: './approved-screen.component.html',
  styleUrls: ['./approved-screen.component.scss']
})
export class ApprovedScreenComponent implements OnInit {

  constructor() { }

  @Input() approved: Windmill[] | undefined;

  ngOnInit(): void {
  }

}
