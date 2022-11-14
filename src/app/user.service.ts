import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from './auth/session.service';
import { User } from './WindmillInterfaces/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  url = 'http://localhost:3000/users';

  token: undefined | String = undefined;
  user: undefined | User = undefined;

  auth(user: String, password: String): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth', { 
      user,
      password
    })
  }

  getToken() {
    return this.token;
  }

  setUserToken(user: User, token: String) {
    this.user = user;
    this.token = token;
    this.sessionService.saveData('jwt', token as string);
  }

  clearUserToken() {
    this.user = undefined;
    this.token = undefined;
  }

  register(user: String, password: String, rol: Number): Observable<any> {
    return this.http.post<any>('http://localhost:3000/register', { 
      user: user,
      password: password,
      rol: rol
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  
  getUserById(id: string): Observable<User[]> {
    const url = `${this.url}/${id}`
    return this.http.get<User[]>(url);
  }

  // postUser(name: string, password: string, rol: Number): Observable<void> {
  //   return this.http.post<void>(this.url, { name, password, rol });
  // }

  deleteUser(id: string): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.delete<any>(url);
  }

  editUser(id: string, name: string, password: string, rol: Number): Observable<any> {
    const url = `${this.url}/${id}`
    return this.http.put<any>(url, { name, password, rol });
  }

  saveUser(){
    this.sessionService.saveData('role', this.user!.role.toString());
  }
}
