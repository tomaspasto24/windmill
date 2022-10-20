import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piece } from './WindmillInterfaces/Piece';
@Injectable({
  providedIn: 'root'
})


export class PiecesService {

  constructor(private http: HttpClient) {}

  pieces: Piece[] = [];

  notesUrl = 'http://localhost:8090/notas';

  

  getPieces(): Piece[] {
    return this.pieces;
  }



  postPiece(content: string): Observable<void> {
    return this.http.post<void>(this.notesUrl, { text: content });
  }

  
}
