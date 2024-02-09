import { Component, OnInit } from '@angular/core';
import { Livre } from '../../shared/models/livre.model';
import { LivreService } from '../../services/livre/livre.service';
import { AuthentificationService } from '../../services/authentification/authentification.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  livres: Livre[] = [];
  isPushAdmin: boolean = false;

  nouveauLivre: Livre = { id: 0, titre: '', auteur: '', resume: '', createdAt: new Date(), updatedAt: new Date(), categories: [] };

  constructor(private livreService: LivreService, private authService: AuthentificationService) {}

  ngOnInit(): void {
    this.getLivres();
  }

  getLivres(): void {
    this.livreService.getLivres().subscribe(livres => this.livres = livres);
  }

  updateLivre(livre: Livre): void {
    this.livreService.updateLivre(livre).subscribe();
  }

  deleteLivre(id: number): void {
    this.livreService.deleteLivre(id).subscribe(() => {
      this.livres = this.livres.filter(l => l.id !== id);
    });
  }

  createLivre(): void {
    this.livreService.createLivre(this.nouveauLivre).subscribe(() => {
      this.getLivres(); // Actualiser la liste des livres après création
      // Réinitialiser le formulaire ou effectuer d'autres actions après la création réussie du livre
      this.nouveauLivre = { id: 0, titre: '', auteur: '', resume: '', createdAt: new Date(), updatedAt: new Date(), categories: [] };
    });
  }

  adminMode(): void {
    if(this.authService.isAdmin()){
    this.isPushAdmin = !this.isPushAdmin;
    }
  }
}