import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from '../image.service';
import { Piece } from '../WindmillInterfaces/Piece';

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

  constructor(private imageservice: ImageService) { }

  @Input() piece: Piece | undefined;
  @Input() allowEdit: boolean = false;

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

}
