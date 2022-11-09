import { ImageService } from './../image.service';
import { Windmill } from './../WindmillInterfaces/Windmill';
import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { Router, Routes, NavigationEnd } from '@angular/router'
import { Location } from '@angular/common';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PrototypeService } from '../prototype.service';
@Component({
  selector: 'app-prototype-card',
  templateUrl: './prototype-card.component.html',
  styleUrls: ['./prototype-card.component.scss']
})


export class PrototypeCardComponent implements OnInit {

  faWrong = faSquareXmark;
  faCheck = faSquareCheck;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @Input() windmill: Windmill | undefined;

  @Output() refresh = new EventEmitter<string>();

  imagesToShow: any[] = [];

  constructor(private imageService: ImageService, config: NgbCarouselConfig, private prototypeService: PrototypeService) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
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

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

  togglePaused() {
    if (this.carousel !== undefined) {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  rechazar() {
    const id = this.windmill?._id;
    if (id) {
      this.prototypeService.rechazarPrototype(id).subscribe(response => {
        if (response.acknowledged) {
          alert('Molino rechazado satisfactoriamente.');
          this.refresh.emit(id as string);
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
          this.refresh.emit(id as string);
        } else {
          alert('Ocurrió un error');
        }
      })
    }
  }

}