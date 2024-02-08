import { Injectable } from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  // Supposons que vous avez une liste d'utilisateurs enregistrés dans votre application
  private utilisateurs: Utilisateur[] = [
    { id: 1, firstname: 'John', lastname: 'Doe', email: 'john@example.com', password: 'password123', role: 'user' },
    { id: 2, firstname: 'Admin', lastname: 'User', email: 'admin@example.com', password: 'admin123', role: 'admin' }
  ];

  constructor() {}

  login(email: string, password: string): Utilisateur | null {
    // Recherche de l'utilisateur par email
    const utilisateurTrouve = this.utilisateurs.find(utilisateur => utilisateur.email === email);

    // Vérification du mot de passe si l'utilisateur est trouvé
    if (utilisateurTrouve && utilisateurTrouve.password === password) {
      return utilisateurTrouve; // Retourne l'utilisateur s'il est trouvé et le mot de passe est correct
    } else {
      return null; // Retourne null si l'utilisateur n'est pas trouvé ou le mot de passe est incorrect
    }
  }
}
