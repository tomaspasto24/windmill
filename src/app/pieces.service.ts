import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Piece, PieceType } from './WindmillInterfaces/Piece';
import { NgFor } from '@angular/common';
@Injectable({
  providedIn: 'root'
})


export class PiecesService {

  constructor() { }

  pieces: Piece[] = [
    {
      _id: '1',
      name: 'Pieza 1',
      type: PieceType.Base,
      photo: '',
      airResistance: '4.5',
      material: 'Wood'
    },
    {
      _id: '2', 
      name: 'Pieza 2',
      type: PieceType.Body,
      photo: '',
      airResistance: '2',
      material: 'Wood'
    },
    {
      _id: '3',
      name: 'Pieza 3',
      type: PieceType.Blade,
      photo: '',
      airResistance: '3',
      material: 'Wood'
    },
    {
      _id: '4',
      name: 'Pieza 4',
      type: PieceType.Base,
      photo: '',
      airResistance: '5',
      material: 'Wood'
    },
  ]
  getPieces(): Piece[] {
    return this.pieces;
  }

  getPiecebyId(id: String) {
    return this.pieces.find(pie => pie._id === id);
  }

  postPiece(name: string, type: PieceType, photo: string, airResistance: string, material: string) {
    const pieceNew = {
      name,
      _id: Math.random().toString(),
      type,
      photo,
      airResistance,
      material
    }
    this.pieces.push(pieceNew);
  }
}
