export interface Utilisateur {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
  }