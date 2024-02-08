import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../../shared/models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private apiUrl = 'api/livres'; 

  constructor(private http: HttpClient) { }

  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiUrl);
  }

  createLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(this.apiUrl, livre);
  }

  updateLivre(livre: Livre): Observable<any> {
    return this.http.put(`${this.apiUrl}/${livre.id}`, livre);
  }

  deleteLivre(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
