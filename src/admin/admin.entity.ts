import { Categorie } from 'src/categorie/categorie.entity';
import { Voiture } from 'src/voiture/voiture.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity()
export class Admin {
    @PrimaryColumn()
    id: number;

    @Column({nullable: false})
    nomAdmin: string;

    @Column()
    mdpAdmin: string;

    @Column()
    email: string;

    @Column({nullable: false})
    poste: string;

    @OneToMany(() => Categorie, categorie => categorie.admin)
    categorie: Categorie[];

    @OneToMany(() => Voiture, voiture => voiture.admin)
    voiture: Voiture[];
}