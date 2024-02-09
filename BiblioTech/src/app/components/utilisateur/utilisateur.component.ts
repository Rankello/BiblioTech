import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur.model';
import { UtilisateurService } from '../../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  nouvelUtilisateur: Utilisateur = { id: 0, firstname: '', lastname: '', email: '', password: '', role: 'user' };
  utilisateurToUpdate: Utilisateur = { id: 0, firstname: '', lastname: '', email: '', password: '', role: 'user' };

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilisateurService.getUsers().subscribe(users => this.utilisateurs = users);
  }

  createUser(): void {
    this.utilisateurService.createUser(this.nouvelUtilisateur).subscribe(() => {
      this.nouvelUtilisateur = { id: 0, firstname: '', lastname: '', email: '', password: '', role: 'user' };
      this.getUtilisateurs(); // Actualiser la liste des utilisateurs après la création
    });
  }

  updateUser(user: Utilisateur): void {
    this.utilisateurService.updateUser(user).subscribe(() => {
      this.getUtilisateurs(); // Actualiser la liste des utilisateurs après la mise à jour
    });
  }

  deleteUser(userId: number): void {
    this.utilisateurService.deleteUser(userId).subscribe(() => {
      this.getUtilisateurs(); // Actualiser la liste des utilisateurs après la suppression
    });
  }
}
