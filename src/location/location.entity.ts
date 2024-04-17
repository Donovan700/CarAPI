import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from '../client/client.entity';
import { Voiture } from '../voiture/voiture.entity';

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    dateDeb: Date;

    @Column({nullable: false})
    dateFin: Date;

    @Column()
    dateLocation: Date;

    @Column({ default: false })
    isPayer: boolean;

    @Column({ nullable: false})
    numPermis: number;

    @Column({ nullable: false })
    numImm: string;

    @ManyToOne(() => Client, client => client.location)
    client: Client;

    @ManyToOne(() => Voiture, voiture => voiture.location)
    voiture: Voiture;
}
