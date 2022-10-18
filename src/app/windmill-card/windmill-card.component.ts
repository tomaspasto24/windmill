import { Component, OnInit } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-windmill-card',
  templateUrl: './windmill-card.component.html',
  styleUrls: ['./windmill-card.component.scss']
})
export class WindmillCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faEdit = faPenToSquare;
  faDelete = faTrash;
  showHideBodyCard: boolean = false;

  cardBodyVisibility(visibility: boolean) {
    console.log(visibility)
    this.showHideBodyCard = visibility;
  }

}
