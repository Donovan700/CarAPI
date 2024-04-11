import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Location } from 'src/location/location.entity';

@Entity()
export class Client {
    @PrimaryColumn()
    numPermis: number;

    @Column({nullable: false})
    nomClient: string;

    @Column()
    prenomClient: string;

    @Column()
    photoClient: string;

    @Column({ nullable: false })
    mdpClient: string;

    @Column()
    email: string;

    @Column()
    adresse: string;

    @Column()
    numTel: string;

    @OneToMany(() => Location, location => location.client)
    location: Location[];
}