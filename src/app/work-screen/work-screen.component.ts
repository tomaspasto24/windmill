import { UserService } from './../user.service';
import { PieceType } from './../WindmillInterfaces/Piece';
import { Router, UrlTree } from '@angular/router';
import { PiecesService } from './../pieces.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Piece } from '../WindmillInterfaces/Piece';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AuthService } from '../auth/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-work-screen',
  templateUrl: './work-screen.component.html',
  styleUrls: ['./work-screen.component.scss']
})

export class WorkScreenComponent implements OnInit {

  // Necesitamos separar si o si en tres colecciones para que podamos evitar que
  // se ingresen piezas en los lugares donde no van. Por ejemplo, para evitar que
  // se agregen un aspa en el lugar del cuerpo. 
  aspasDisponibles: Piece[] = [];
  cuerposDisponibles: Piece[] = [];
  basesDisponibles: Piece[] = [];

  aspaSeleccionada: Piece[] = [];
  cuerpoSeleccionado: Piece[] = [];
  baseSeleccionada: Piece[] = [];

  constructor(private router: Router, private pieceService: PiecesService, private userservice: UserService) { }

  ngOnInit(): void {
    this.filterAllPieces();
  }

  messageError: String = "Se deben insertar piezas en todos los campos para poder confirmar un modelo.";
  messageErrorTittle: String = "Error al intentar agregar el modelo";

  messageOk: String = "El modelo fue creado con éxito.";
  messageOkTittle: String = "Creación del modelo";

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
      delete (arrayDestino[0]);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  filter(filtered: Piece[]) {
    this.limpiarArraysDePiezas();
    filtered.forEach((piece) => {
      if (piece.type == PieceType.Blade) {
        this.aspasDisponibles.push(piece);
      } else if (piece.type == PieceType.Base) {
        this.basesDisponibles.push(piece);
      } else {
        console.log(piece.type)
        this.cuerposDisponibles.push(piece);
      }
    });
  }

  filterAllPieces() {
    this.limpiarArraysDePiezas();
    const observable = this.pieceService.getPieces();
    observable.subscribe(response => {
      (response as Piece[]).forEach((piece) => {
        if (piece.type == PieceType.Blade) {
          this.aspasDisponibles.push(piece);
        } else if (piece.type == PieceType.Base) {
          this.basesDisponibles.push(piece);
        } else {
          this.cuerposDisponibles.push(piece);
        }
      })
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

  comenzarArmado() {
    const blade = this.aspaSeleccionada[0]; 
    const body = this.cuerpoSeleccionado[0]; 
    const base = this.baseSeleccionada[0];
    const creatorName = this.userservice.user?.name;

    if(blade !== undefined && body !== undefined && base !== undefined && creatorName !== undefined) {
      const prototype = {
        name: "",
        blade,
        body,
        base,
        creator: creatorName,
        validated: false
      }
      console.log(prototype)
    } else {
      alert('Debe rellenar las tres piezas.')
    }
    
  }

  reestablecer() {
    this.limpiarWorkspace();
  }

  limpiarWorkspace() {
    delete (this.aspaSeleccionada[0]);
    delete (this.cuerpoSeleccionado[0]);
    delete (this.baseSeleccionada[0]);
    this.filterAllPieces();
  }

  limpiarArraysDePiezas() {
    this.aspasDisponibles = [];
    this.cuerposDisponibles = [];
    this.basesDisponibles = [];
  }
}
