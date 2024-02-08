import { Categorie } from "./categorie.model";

export interface Livre {
    id: number;
    titre: string;
    auteur: string;
    resume: string;
    createdAt: Date;
    updatedAt: Date;
    categories: Categorie[]; 
  }