import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthentificationService) {}

  login(): void {
    const utilisateur = this.authService.login(this.email, this.password);
    if (utilisateur) {
      // Authentification réussie, rediriger vers une page d'accueil
      this.router.navigate(['/accueil']);
    } else {
      // Afficher un message d'erreur ou gérer l'authentification échouée
      console.log('Authentification échouée');
    }
  }
}
