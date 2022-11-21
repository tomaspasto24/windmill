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

  getPieces() {
    return this.http.get(this.url);
  }
  
  getPieceById(id: string): Observable<Piece[]> {
    const url = `${this.url}/${id}`
    return this.http.get<Piece[]>(url);
  }

  postPiece(name: string, photo: string, airResistance: Number, material: string, type: string) {
    return this.http.post(this.url, { name, photo, airResistance, material, type }, {responseType: 'text'});
  }

  deletePiece(id: string) {
    const url = `${this.url}/${id}`
    return this.http.delete(url);
  }

  editPiece(id: string | undefined, name: string, photo: string | undefined, airResistance: Number, material: string, type: string): Observable<any> {
    const url = `${this.url}/${id}`
    if(photo === undefined) {
      return this.http.put<any>(url, { name, photo: "", airResistance, material, type });
    } else {
      return this.http.put<any>(url, { name, photo, airResistance, material, type });
    }
  }
}
