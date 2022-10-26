import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './WindmillInterfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  
  getUserById(id: string): Observable<User[]> {
    const url = `${this.url}/${id}`
    return this.http.get<User[]>(url);
  }

  postUser(name: string, password: string, rol: Number): Observable<void> {
    return this.http.post<void>(this.url, { name, password, rol });
  }

  deleteUser(id: string): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.delete<any>(url);
  }

  editUser(id: string, name: string, password: string, rol: Number): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.put<any>(url, { name, password, rol });
  }
}
