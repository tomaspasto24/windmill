import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piece } from './WindmillInterfaces/Piece';
import { NgFor } from '@angular/common';
@Injectable({
  providedIn: 'root'
})


export class PiecesService {

  constructor(private http: HttpClient) { }

  pieces: Piece[] = [
    {
      id: '1',
      name: 'Pieza 1',
      photo: '',
      airResistance: '4.5',
      material: 'Wood'
    },
    {
      id: '2', 
      name: 'Pieza 2',
      photo: '',
      airResistance: '2',
      material: 'Wood'
    },
    {
      id: '3',
      name: 'Pieza 3',
      photo: '',
      airResistance: '3',
      material: 'Wood'
    },
    {
      id: '4',
      name: 'Pieza 4',
      photo: '',
      airResistance: '5',
      material: 'Wood'
    },
  ]
  getPieces(): Piece[] {
    return this.pieces;
  }

  getPiecebyId(id: String) {
    return this.pieces.find(pie => pie.id === id);
  }

  postPiece(name: string, photo: string, airResistance: string, material: string) {
    const pieceNew = {
      id: Math.random().toString(),
      name,
      photo,
      airResistance,
      material
    }
    this.pieces.push(pieceNew);
  }
}
