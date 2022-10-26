import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piece } from './WindmillInterfaces/Piece';
@Injectable({
  providedIn: 'root'
})


export class PiecesService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/pieces';

  getPieces(): Observable<Piece[]> {
    return this.http.get<Piece[]>(this.url);
  }
  
  getPieceById(id: string): Observable<Piece[]> {
    const url = `${this.url}/${id}`
    return this.http.get<Piece[]>(url);
  }

  postPiece(name: string, photo: string, airResistance: Number, material: string): Observable<void> {
    return this.http.post<void>(this.url, { name, photo, airResistance, material });
  }

  deletePiece(id: string): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.delete<any>(url);
  }

  editPiece(id: string, name: string, photo: string, airResistance: Number, material: string): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.put<any>(url, { name, photo, airResistance, material });
  }
}
