import { Component, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PiecesService } from '../pieces.service';
@Component({
  selector: 'app-prototype-detail-screen',
  templateUrl: './prototype-detail-screen.component.html',
  styleUrls: ['./prototype-detail-screen.component.scss']
})
export class PrototypeDetailScreenComponent implements OnInit {

  faCircleCheck = faCircleCheck;
  faCircleArrowLeft = faCircleArrowLeft;
  faCircleXMark = faCircleXmark;

  constructor(private route: ActivatedRoute, private location: Location, private pieceService: PiecesService) { }

  ngOnInit(): void {
  }

  /* backclicked() {
    this.location.back();
  } */
  
  /* displayPiece(id: String): String {
    
  } */

  id : any = this.route.snapshot.paramMap.get('id');

  getPiece(id: String): void{
    this.pieceService.getPiecebyId(id);
  }
}


