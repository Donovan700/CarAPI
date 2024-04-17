import { EntitySchema } from 'typeorm';
import { Location } from './location.entity';

export const LocationSchema = new EntitySchema<Location>({
    name: 'Location',
    target: Location,
    columns: {
      id: {
        type: Number,
        primary: true,
      },
      dateDeb: {
        type: Date,
        nullable: false,
      },
      dateFin: {
        type: Date,
        nullable: false,
      },
      dateLocation: {
        type: Date
      },
      isPayer: {
        type: Boolean
      },
      numPermis: {
        type: Number,
        nullable: false,
      },
      numImm: {
        type: String,
        nullable: false,
      }
    },
    relations: {
        client: {
            type: 'many-to-one',
            target: 'Client',
        },
        voiture: {
            type: 'many-to-one',
            target: 'Voiture',
        }
    }
});