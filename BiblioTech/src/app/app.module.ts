// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { FormsModule } from '@angular/forms'; 
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';

import { routes } from './app.routes';


import { AppComponent } from './app.component';
import { LivreComponent } from './components/livre/livre.component'; // Importer le composant LivreComponent
import { PageComponent } from './components/page/page.component'; // Importer le composant PageComponent
import { CategorieComponent } from './components/categorie/categorie.component'; // Importer le composant CategorieComponent
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component'; // Importer le composant UtilisateurComponent
import { AuthentificationComponent } from './components/authentification/authentification.component';

import { LivreService } from './services/livre/livre.service'; // Importer le service LivreService
import { PageService } from './services/page/page.service'; // Importer le service PageService
import { CategorieService } from './services/categorie/categorie.service'; // Importer le service CategorieService
import { UtilisateurService } from './services/utilisateur/utilisateur.service'; // Importer le service UtilisateurService
import { AuthentificationService } from './services/authentification/authentification.service';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    PageComponent,
    CategorieComponent,
    UtilisateurComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }),
    RouterOutlet,
    RouterModule

  ],
  providers: [
    LivreService,
    PageService,
    CategorieService,
    UtilisateurService,
    AuthentificationService,
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }