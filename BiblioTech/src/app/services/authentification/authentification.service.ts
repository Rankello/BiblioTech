import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../../shared/models/utilisateur.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = 'api/utilisateurs'; // URL de l'API REST pour les utilisateurs
  private currentUser: Utilisateur | null = null; // Variable pour stocker l'utilisateur connecté

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Utilisateur | null> {
    return this.http.get<Utilisateur[]>(this.apiUrl).pipe(
      map(utilisateurs => {
        // Recherche de l'utilisateur par email
        const utilisateurTrouve = utilisateurs.find(utilisateur => utilisateur.email === email);

        // Vérification du mot de passe si l'utilisateur est trouvé
        if (utilisateurTrouve && utilisateurTrouve.password === password) {
          this.currentUser = utilisateurTrouve; // Stocke l'utilisateur connecté
          return utilisateurTrouve; // Retourne l'utilisateur s'il est trouvé et le mot de passe est correct
        } else {
          return null; // Retourne null si l'utilisateur n'est pas trouvé ou le mot de passe est incorrect
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!this.currentUser; // Retourne true si l'utilisateur est connecté, sinon false
  }

  isAdmin(): boolean {
    return this.isLoggedIn() && this.currentUser?.role === 'admin'; // Vérifie si l'utilisateur est connecté et s'il est administrateur
  }
}
