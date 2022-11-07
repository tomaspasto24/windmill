import { Component, OnInit, Input } from '@angular/core';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from '../image.service';
import { PiecesService } from '../pieces.service';
import { Piece } from '../WindmillInterfaces/Piece';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-abm-piezas-screen',
  templateUrl: './abm-piezas-screen.component.html',
  styleUrls: ['./abm-piezas-screen.component.scss']
})

export class AbmPiezasScreenComponent implements OnInit {

  faPlus = faPlus;
  faBars = faFilter;
  selectedFile: ImageSnippet | undefined = undefined;
  imgUrl: undefined | string = undefined;

  constructor(private modalService: NgbModal, private piecesService: PiecesService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.getPieces();
  }

  pieces: Piece[] = [];
  initialPieces: Piece[] = [];
  edit: boolean = true;

  getPieces() {
    this.piecesService.getPieces().subscribe(data => {
      this.pieces = data as Piece[];
      this.initialPieces = data as Piece[];
    });
  }

  postCard(name: string, airResistance: number, material: string, type: string) {
    if (this.imgUrl !== undefined) {
      this.piecesService.postPiece(name, this.imgUrl, airResistance, material, type).subscribe(response => {
        this.getPieces();
      })
    } else {
      alert('Debe ingresar una imagen representando la pieza.')
    }
  }

  closeResult: string = '';

  open(content: any): any {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.imgUrl = res.filename;
        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }

  filterCategoria(termToSearch: string) {
    this.refreshPieces()
    if (termToSearch !== '') {
      this.pieces = this.pieces?.filter(piece => piece.type.toLowerCase().includes(termToSearch.toLowerCase()));
    }
  }

  filterMaterial(termToSearch: string) {
    this.refreshPieces()
    if (termToSearch !== '') {
      this.pieces = this.pieces?.filter(piece => piece.material.toLowerCase().includes(termToSearch.toLowerCase()));
    }
  }

  refreshPieces() {
    this.pieces = this.initialPieces;
  }

  deletePiece(id: string) {
    this.pieces = this.pieces.filter(piece => piece._id !== id);
    this.initialPieces = this.initialPieces.filter(piece => piece._id !== id);
  }
}
