import { PiecesService } from './../pieces.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from '../image.service';
import { Piece } from '../WindmillInterfaces/Piece';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-piece-card',
  templateUrl: './piece-card.component.html',
  styleUrls: ['./piece-card.component.scss']
})

export class PieceCardComponent implements OnInit {

  faEdit = faPenToSquare;
  faDelete = faTrash;
  showHideBodyCard: boolean = false;
  imageToShow: any;
  selectedFile: ImageSnippet | undefined = undefined;
  imgUrl: undefined | string = undefined;

  constructor(private imageservice: ImageService, private piecesService: PiecesService, private modalService: NgbModal) { }

  @Input() piece: Piece | undefined;
  @Input() allowEdit: boolean = false;

  @Output() refresh = new EventEmitter<string>();

  ngOnInit(): void {
    if (this.piece !== undefined) {
      this.imageservice.getImage(this.piece.photo).subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });
    }
  }

  cardBodyVisibility(visibility: boolean) {
    console.log(visibility)
    this.showHideBodyCard = visibility;
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  deletePiece() {
    if (this.piece !== undefined) {
      const id = this.piece._id;
      this.piecesService.deletePiece(id).subscribe(response => {
        this.refresh.emit(id);
      });
    }
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageservice.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.imgUrl = res.filename;
        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
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

  editCard(name: string, airResistance: number, material: string, type: string) {
    console.log(this.imgUrl)
    if (this.imgUrl && this.piece?._id !== undefined) {
      this.piecesService.editPiece(this.piece?._id, name, this.imgUrl, airResistance, material, type).subscribe(response => {
        
      })
    } else {
      this.piecesService.editPiece(this.piece?._id, name, undefined, airResistance, material, type).subscribe(response => {
      })
    }
  }
}
