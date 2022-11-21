import { NgbCarouselConfig, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from './../image.service';
import { ValidatedType, Windmill } from './../WindmillInterfaces/Windmill';
import { PrototypeService } from './../prototype.service';
import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PiecesService } from '../pieces.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prototype-detail-screen',
  templateUrl: './prototype-detail-screen.component.html',
  styleUrls: ['./prototype-detail-screen.component.scss'],
})

export class PrototypeDetailScreenComponent implements OnInit {

  faCircleCheck = faCircleCheck;
  faCircleArrowLeft = faCircleArrowLeft;
  faCircleXMark = faCircleXmark;

  constructor(private route: ActivatedRoute, private location: Location, private prototypeService: PrototypeService, private imageService: ImageService, config: NgbCarouselConfig, private offcanvasService: NgbOffcanvas) {
    config.interval = 10000;
  }
  id: any = this.route.snapshot.paramMap.get('id');
  windmill: Windmill | undefined;

  isCollapsed = true;

  imagesToShow: any[] = [];

  ngOnInit(): void {

    this.prototypeService.getPrototypeById(this.id).subscribe(response => {
      this.windmill = response as Windmill;
      if (this.windmill === undefined) {
        throw new Error('Windmill es requerido como atributo de windmill card');
      }
      this.imageService.getImage(this.windmill.base.photo).subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });

      this.imageService.getImage(this.windmill.body.photo).subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });

      this.imageService.getImage(this.windmill.blade.photo).subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });
    });

  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagesToShow.push(reader.result);
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  rechazar() {
    const id = this.windmill?._id;
    if (id) {
      this.prototypeService.rechazarPrototype(id).subscribe(response => {
        if (response.acknowledged) {
          alert('Molino rechazado satisfactoriamente.');
          if (this.windmill !== undefined) {
            this.windmill.validated = ValidatedType.rechazado;
          }
        } else { 
          alert('Ocurrió un error');
        }
      })
    }
  }

  aprobar() {
    const id = this.windmill?._id;
    if (id) {
      this.prototypeService.aprobarPrototype(id).subscribe(response => {
        if (response.acknowledged) {
          alert('Molino aprobado satisfactoriamente.');
          if (this.windmill !== undefined) {
            this.windmill.validated = ValidatedType.aprobado;
          }
        } else {
          alert('Ocurrió un error');
        }
      })
    }
  }


  closeResult = '';

  open(content: any) {
    this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /* backclicked() {
    this.location.back();
  } */

  /* displayPiece(id: String): String {
    
  } */


}


