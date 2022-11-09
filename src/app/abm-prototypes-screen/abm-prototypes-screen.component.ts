import { ValidatedType } from './../WindmillInterfaces/Windmill';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from '@angular/core';
import { Windmill } from '../WindmillInterfaces/Windmill';
import { PrototypeService } from '../prototype.service';
@Component({
  selector: 'app-abm-prototypes-screen',
  templateUrl: './abm-prototypes-screen.component.html',
  styleUrls: ['./abm-prototypes-screen.component.scss']
})
export class AbmPrototypesScreenComponent implements OnInit {
  faBars = faFilter
  constructor(private prototypeService: PrototypeService) { }
  
  ngOnInit(): void {
    this.getPrototypes();
  }

  @Input() windmill: Windmill | undefined;

  @Input() prototypes: Windmill[] | undefined;

  getPrototypes(){
    this.prototypeService.getPrototypes().subscribe(data => {
      this.prototypes = (data as Windmill[]).filter(windmill => windmill.validated === ValidatedType.pendiente);
    });
  }
}
