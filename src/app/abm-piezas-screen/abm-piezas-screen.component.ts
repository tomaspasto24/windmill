import { Component, OnInit, Input } from '@angular/core';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PiecesService } from '../pieces.service';
import { Piece } from '../WindmillInterfaces/Piece';

@Component({
  selector: 'app-abm-piezas-screen',
  templateUrl: './abm-piezas-screen.component.html',
  styleUrls: ['./abm-piezas-screen.component.scss']
})
export class AbmPiezasScreenComponent implements OnInit {
  faBars = faFilter;

  faPlus = faPlus;
  constructor(private modalService: NgbModal, private piecesService: PiecesService) { }

  ngOnInit(): void {
    this.getPieces();
  }

  @Input() piece: Piece | undefined;

  @Input() pieces: Piece[] | undefined;


  edit: boolean = true;

  getPieces(){
    this.piecesService.getPieces().subscribe(data => {
      this.pieces = data as Piece[];
    });
  }

  postPiece(name: string, photo: string, airResistance: number, material: string){
    this.piecesService.postPiece(name, photo, airResistance, material).subscribe();
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
  
}
