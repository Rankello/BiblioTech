import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../../shared/models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private apiUrl = 'api/pages'; 

  constructor(private http: HttpClient) { }

  getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.apiUrl);
  }

  createPage(page: Page): Observable<Page> {
    return this.http.post<Page>(this.apiUrl, page);
  }

  updatePage(page: Page): Observable<any> {
    return this.http.put(`${this.apiUrl}/${page.id}`, page);
  }

  deletePage(pageId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${pageId}`);
  }
}