import { EntitySchema } from 'typeorm';
import { Voiture } from './voiture.entity';

export const VoitureSchema = new EntitySchema<Voiture>({
    name: 'Voiture',
    target: Voiture,
    columns: {
      numImm: {
        type: String,
        primary: true,
        unique: true,
      },
      image: {
        type: String,
      },
      marque: {
        type: String,
      },
      model: {
        type: String,
      },
      couleur: {
        type: String,
      },
      isLouer: {
        type: Boolean,
        default: false,
      },
      prixJournalier: {
        type: Number,
      },
      details: {
        type: String,
      },
      adminId: {
        type: Number,
        nullable: false,
      },
      categorieId: {
        type: Number,
        nullable: false,
      }
    },
    relations: {
        location: {
            type: 'one-to-many',
            target: 'Location',
        },
        categorie: {
            type: 'many-to-many',
            target: 'Categorie',
        },
        admin: {
            type: 'many-to-many',
            target: 'Admin'
        }
    }
});