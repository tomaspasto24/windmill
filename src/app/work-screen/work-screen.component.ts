import { PieceType } from './../WindmillInterfaces/Piece';
import { Router } from '@angular/router';
import { PiecesService } from './../pieces.service';
import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Piece } from '../WindmillInterfaces/Piece';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-work-screen',
  templateUrl: './work-screen.component.html',
  styleUrls: ['./work-screen.component.scss']
})

export class WorkScreenComponent implements OnInit {
  
  constructor(private servicePiece : PiecesService, private router: Router ) { }
  
  ngOnInit(): void {
    this.filtrarPiezas();
  }

    // Necesitamos separar si o si en tres colecciones para que podamos evitar que
  // se ingresen piezas en los lugares donde no van. Por ejemplo, para evitar que
  // se agregen un aspa en el lugar del cuerpo. 
  aspasDisponibles: Piece[] = [];
  cuerposDisponibles: Piece[] = [];
  basesDisponibles: Piece[] = [];

  aspaSeleccionada: Piece[] = [];
  cuerpoSeleccionado: Piece[] = [];
  baseSeleccionada: Piece[] = [];

  drop(event: CdkDragDrop<Piece[]>, arrayDestino: Piece[]) {
    if (arrayDestino[0] == null) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      const listaPiezas = this.obtenerArrayPiezasConElTipo(arrayDestino[0].type);
      listaPiezas.push(arrayDestino[0]);
      delete(arrayDestino[0]);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  filtrarPiezas() {
    const observable = this.servicePiece.getPieces();
    observable.subscribe(response => {
      response.forEach((pieza) => {
        if (pieza.type == PieceType.Blade) {
          this.aspasDisponibles.push(pieza);
        } else if (pieza.type == PieceType.Base) {
          this.basesDisponibles.push(pieza);
        } else {
          this.cuerposDisponibles.push(pieza);
        }
      });
    });
  }

  obtenerArrayPiezasConElTipo(type: PieceType): Piece[] {
    if (type == PieceType.Blade) {
      return this.aspasDisponibles;
    } else if (type == PieceType.Base) {
      return this.basesDisponibles;
    } else {
      return this.cuerposDisponibles;
    }
  }
}
  