
import { Routes } from '@angular/router';
import { LivreComponent } from './components/livre/livre.component';
import { PageComponent } from './components/page/page.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

export const routes: Routes = [
    { path: '', redirectTo: '/livres', pathMatch: 'full' }, // Rediriger vers la liste des livres par défaut
    { path: 'livres', component: LivreComponent },
    { path: 'pages', component: PageComponent },
    { path: 'categories', component: CategorieComponent },
    { path: 'categories', component: CategorieComponent },
    { path: 'utilisateurs', component: UtilisateurComponent },
];