import { EntitySchema } from 'typeorm';
import { Categorie } from './categorie.entity';

export const CategorieSchema = new EntitySchema<Categorie>({
    name: 'Categorie',
    target: Categorie,
    columns: {
      id: {
        type: Number,
        primary: true,
      },
      nom: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    relations: {
        admin: {
            type: 'many-to-one',
            target: 'Client',
        },
        voiture: {
            type: 'one-to-many',
            target: 'Voiture',
        }
    }
});