import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../shared/models/categorie.model';
import { CategorieService } from '../../services/categorie/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: Categorie[] = [];
  nouvelleCategorie: Categorie = { id: 0, label: '' };
  categorieToUpdate: Categorie = { id: 0, label: '' };

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categorieService.getCategories().subscribe(categories => this.categories = categories);
  }

  createCategorie(): void {
    this.categorieService.createCategorie(this.nouvelleCategorie).subscribe(() => {
      this.nouvelleCategorie = { id: 0, label: '' };
      this.getCategories(); // Actualiser la liste des catégories après la création
    });
  }

  updateCategorie(categorie: Categorie): void {
    this.categorieService.updateCategorie(categorie).subscribe(() => {
      this.getCategories(); // Actualiser la liste des catégories après la mise à jour
    });
  }

  deleteCategorie(categorieId: number): void {
    this.categorieService.deleteCategorie(categorieId).subscribe(() => {
      this.getCategories(); // Actualiser la liste des catégories après la suppression
    });
  }
}
