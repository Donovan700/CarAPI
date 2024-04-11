import { EntitySchema } from 'typeorm';
import { Client } from './client.entity';

export const ClientSchema = new EntitySchema<Client>({
    name: 'Client',
    target: Client,
    columns: {
      numPermis: {
        type: Number,
        primary: true,
      },
      nomClient: {
        type: String,
        nullable: false,
      },
      prenomClient: {
        type: String,
      },
      photoClient: {
        type: String,
      },
      mdpClient: {
        type: String,
        nullable: false,
      },
      email: {
        type: String,
      },
      adresse: {
        type: String,
      },
      numTel: {
        type: String,
      },
    },
    relations: {
        location: {
            type: 'one-to-many',
            target: 'Location'
        }
    }
});