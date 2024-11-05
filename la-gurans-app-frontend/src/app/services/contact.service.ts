import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = environment.apiUrl + '/contact';

  constructor(private http: HttpClient) {}

  sendContactForm(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
