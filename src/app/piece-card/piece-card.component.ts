import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Piece } from '../WindmillInterfaces/Piece';

@Component({
  selector: 'app-piece-card',
  templateUrl: './piece-card.component.html',
  styleUrls: ['./piece-card.component.scss']
})

export class PieceCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() piece: Piece | undefined;
  
  @Input() allowEdit: boolean = false;
  
  faEdit = faPenToSquare;
  faDelete = faTrash;
  showHideBodyCard: boolean = false;

  cardBodyVisibility(visibility: boolean) {
    console.log(visibility)
    this.showHideBodyCard = visibility;
  }

}
