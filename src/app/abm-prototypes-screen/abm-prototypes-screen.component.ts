import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from '@angular/core';
import { ValidatedType, Windmill } from '../WindmillInterfaces/Windmill';
import { PrototypeService } from '../prototype.service';
import { ApprovedScreenComponent } from '../approved-screen/approved-screen.component';

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

  /* approvePrototype(){
    this.windmill!.validated = ValidatedType.aprobado;
    this.prototypeService.getPrototypes().subscribe(data => {
      this.approvedPrototypes.approved = data as Windmill[];
    });
  } */
}
