import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Livre } from '../shared/models/livre.model';
import { Utilisateur } from '../shared/models/utilisateur.model';
import { Categorie } from '../shared/models/categorie.model';
import { Page } from '../shared/models/page.model';

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
  
      const utilisateursData = localStorage.getItem('utilisateurs');
      const utilisateurs: Utilisateur[] = utilisateursData ? JSON.parse(utilisateursData) : [
        { id: 1, firstname: 'John', lastname: 'Doe', email: 'john@example.com', password: 'password123', role: 'user' },
        { id: 2, firstname: 'Admin', lastname: 'User', email: 'admin@example.com', password: 'admin123', role: 'admin' }
      ];

      const categoriesData = localStorage.getItem('categories');
      const categories: Categorie[] = categoriesData ? JSON.parse(categoriesData) : [
        { id: 1, label: 'Informatique' },
        { id: 2, label: 'Science-fiction' }
      ];

      const pagesData = localStorage.getItem('pages');
      const pages: Page[] = pagesData ? JSON.parse(pagesData) : [
        { id: 1, title: 'Page 1 du Livre 1', content: 'Contenu de la page 1 du Livre 1', livreId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 2, title: 'Page 2 du Livre 1', content: 'Contenu de la page 2 du Livre 1', livreId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 3, title: 'Page 1 du Livre 2', content: 'Contenu de la page 1 du Livre 2', livreId: 2, createdAt: new Date(), updatedAt: new Date() }
      ];
  
      return { livres, utilisateurs, pages, categories };
    }
  
    genId(collection: any[]): number {
      return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
    }
  
    updateLocalStorage(collection: any[]): void {
      const collectionName = collection instanceof Array && collection.length > 0 ? collection[0].constructor.name.toLowerCase() + 's' : '';
      localStorage.setItem(collectionName, JSON.stringify(collection));
    }
  }