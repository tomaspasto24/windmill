import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piece } from './WindmillInterfaces/Piece';
import { PIECES } from './Pieces';
import { NgFor } from '@angular/common';
@Injectable({
  providedIn: 'root'
})


export class PiecesService {

  constructor(private http: HttpClient) {}

  notesUrl = 'http://localhost:8090/notas';

  

  getPieces(): Piece[] {
    return PIECES;
  }

  getPiecebyId(id: number){
    PIECES.forEach((piece): Piece | undefined => {
      if (piece.id = id) {
        return piece;
      }
    });
  }

  postPiece(content: string): Observable<void> {
    return this.http.post<void>(this.notesUrl, { text: content });
  }
}
