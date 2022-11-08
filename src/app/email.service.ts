import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(email: string) {
    return this.http.post<any>('http://localhost:3000/sendemail', { email });
  }

  changePassword(code: string, newPassword: string) {
    return this.http.post<any>('http://localhost:3000/changePassword', { code, newPassword });
  }
}
