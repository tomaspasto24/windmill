import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Windmill, ValidatedType } from './WindmillInterfaces/Windmill';
import { HttpClient } from '@angular/common/http';
import { Piece } from './WindmillInterfaces/Piece';
import { User } from './WindmillInterfaces/User';

@Injectable({
  providedIn: 'root'
})
export class PrototypeService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/prototypes';

  getPrototypes(): Observable<Windmill[]> {
    return this.http.get<Windmill[]>(this.url);
  }

  getPrototypeById(id: string): Observable<Windmill[]> {
    const url = `${this.url}/${id}`
    return this.http.get<Windmill[]>(url);
  }

  postPrototype(name: string, description: string, blade: Piece, body: Piece, base: Piece, creator: string): Observable<any> {
    return this.http.post<any>(this.url, {
      name,
      description,
      blade,
      body,
      base,
      creator
    });
  }

  deletePrototype(id: string): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.delete<any>(url);
  }

  editPrototype(id: string, name: string, blade: Piece, body: Piece, base: Piece, creator: User): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.put<any>(url, { name, blade, body, base, creator });
  }

  rechazarPrototype(id: String) {
    const url = `${this.url}/changeValidate/${id}`
    return this.http.post<any>(url, { validated: ValidatedType.rechazado });
  }

  
  aprobarPrototype(id: String) {
    const url = `${this.url}/changeValidate/${id}`
    return this.http.post<any>(url, { validated: ValidatedType.aprobado });
  }
}
