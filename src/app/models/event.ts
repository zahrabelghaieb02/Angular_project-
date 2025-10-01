export interface Event {
    id: number;
    titre: string;
    description: string;
    date: Date;
    lieu: string;
    prix: number;
    organisateurId: number;
    imageUrl: string;
    nbplaces: number;
    nbrLike: number;
  }
  