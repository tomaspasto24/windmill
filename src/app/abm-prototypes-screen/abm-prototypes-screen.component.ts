import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from '@angular/core';
import { ValidatedType, Windmill } from '../WindmillInterfaces/Windmill';
import { PrototypeService } from '../prototype.service';
import { ApprovedScreenComponent } from '../approved-screen/approved-screen.component';
import { FormControl } from '@angular/forms';

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
  initialPrototypes: Windmill[] | undefined;

  getPrototypes() {
    this.prototypeService.getPrototypes().subscribe(data => {
      this.prototypes = data as Windmill[];
      this.initialPrototypes = data as Windmill[];
    });
  }

  changeBtnFilterHandler(value: string) {
    if(value === 'Rechazados') {
      this.filterPrototypesRechazados();
    } else if (value === 'Aprobados') {
      this.filterPrototypesAprobados();
    } else if (value === 'Pendientes') {
      this.filterPrototypesPendientes();
    } else {
      this.filterAllPrototypes();
    }
  }

  filterPrototypesAprobados() {
    this.getPrototypes();
    this.prototypes = this.initialPrototypes?.filter(windmill => windmill.validated === ValidatedType.aprobado);
  }

  filterPrototypesRechazados() {
    this.getPrototypes();
    this.prototypes = this.initialPrototypes?.filter(windmill => windmill.validated === ValidatedType.rechazado);
  }

  filterPrototypesPendientes() {
    this.prototypes = this.initialPrototypes?.filter(windmill => windmill.validated === ValidatedType.pendiente);
  }

  filterAllPrototypes() {
    if(this.initialPrototypes !== undefined) {
      this.prototypes = this.initialPrototypes;
    }
  }

  filterPrototypesTitle(termToSearch: string) {
    this.refresh()
    if (termToSearch !== '') {
      this.prototypes = this.initialPrototypes?.filter(pro => pro.name.toLowerCase().includes(termToSearch.toLowerCase()));
    }
  }

  refresh() {
    this.prototypes = this.initialPrototypes;
  }

}
