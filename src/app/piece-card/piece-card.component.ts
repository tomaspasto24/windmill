import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PiecesService } from '../pieces.service';
import { Piece } from '../WindmillInterfaces/Piece';

@Component({
  selector: 'app-piece-card',
  templateUrl: './piece-card.component.html',
  styleUrls: ['./piece-card.component.scss']
})

export class PieceCardComponent implements OnInit {

  constructor(private modalService: NgbModal, private piecesService: PiecesService) { }

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

  closeResult: string = '';

  open(content:any) : any {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    return content;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  deleteCard(id: string){
    this.piecesService.deletePiece(id).subscribe();
  }

  postCard(name: string, photo: string, airResistance: number, material: string){
    this.piecesService.postPiece(name, photo, airResistance, material).subscribe();
  }
}
