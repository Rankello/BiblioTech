import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Livre } from '../shared/models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    const livresData = localStorage.getItem('livres');
    const livres: Livre[] = livresData ? JSON.parse(livresData) : [
      { id: 1, titre: 'Livre 1', auteur: 'Auteur 1', resume: 'resume du livre 1', createdAt: new Date(), updatedAt: new Date(), categories: ['Catégorie 1', 'Catégorie 2'] },
      { id: 2, titre: 'Livre 2', auteur: 'Auteur 2', resume: 'resume du livre 2', createdAt: new Date(), updatedAt: new Date(), categories: ['Catégorie 2', 'Catégorie 3'] },
      { id: 3, titre: 'Livre 3', auteur: 'Auteur 3', resume: 'resume du livre 3', createdAt: new Date(), updatedAt: new Date(), categories: ['Catégorie 1', 'Catégorie 3'] }
    ];
    return { livres };
  }

  genId(livres: Livre[]): number {
    return livres.length > 0 ? Math.max(...livres.map(livre => livre.id)) + 1 : 1;
  }

  updateLocalStorage(livres: Livre[]): void {
    localStorage.setItem('livres', JSON.stringify(livres));
  }
}
