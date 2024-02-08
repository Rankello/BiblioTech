import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../../shared/models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = 'api/categories'; // URL de l'API REST pour les catégories

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl);
  }

  createCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiUrl, categorie);
  }

  updateCategorie(categorie: Categorie): Observable<any> {
    return this.http.put(`${this.apiUrl}/${categorie.id}`, categorie);
  }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}