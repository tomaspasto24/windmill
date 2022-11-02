import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }


  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post<any>('http://localhost:3000/image', formData);
  }

  public getImage(imageName: string): Observable<Blob> {
    return this.http.get(`http://localhost:3000/image/${imageName}`, { responseType: 'blob' });
  }
}
