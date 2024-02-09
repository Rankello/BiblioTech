
import { Routes } from '@angular/router';
import { LivreComponent } from './components/livre/livre.component';
import { PageComponent } from './components/page/page.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { AuthenticationGuard } from './services/authentification/authentification.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/authentification', pathMatch: 'full' }, 
    { path: 'authentification', component: AuthentificationComponent },
    { path: 'livres', component: LivreComponent, canActivate: [AuthenticationGuard] }, 
    { path: 'pages', component: PageComponent, canActivate: [AuthenticationGuard] },
    { path: 'categories', component: CategorieComponent, canActivate: [AuthenticationGuard] }, 
    { path: 'utilisateurs', component: UtilisateurComponent, canActivate: [AuthenticationGuard] } 
];