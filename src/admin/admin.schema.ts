import { EntitySchema } from 'typeorm';
import { Admin } from './admin.entity';

export const AdminSchema = new EntitySchema<Admin>({
    name: 'Admin',
    target: Admin,
    columns: {
      id: {
        type: Number,
        primary: true,
      },
      nomAdmin: {
        type: String,
        nullable: false,
      },
      mdpAdmin: {
        type: String,
        nullable: false,
      },
      email: {
        type: String,
      },
      poste: {
        type: String,
      },
    },
    relations: {
        categorie: {
            type: 'one-to-many',
            target: 'Categorie',
        },
        voiture: {
            type: 'one-to-many',
            target: 'Voiture',
        }
    }
});