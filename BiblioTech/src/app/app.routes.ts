
import { Routes } from '@angular/router';
import { LivreComponent } from './components/livre/livre.component';

export const routes: Routes = [
    { path: '', redirectTo: '/livres', pathMatch: 'full' }, // Rediriger vers la liste des livres par défaut
    { path: 'livres', component: LivreComponent },
];