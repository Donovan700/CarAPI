import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Voiture } from 'src/voiture/voiture.entity';
import { Admin } from 'src/admin/admin.entity';

@Entity()
export class Categorie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    description: string;

    @OneToMany(() => Voiture, voiture => voiture.categorie)
    voiture: Voiture[];

    @ManyToOne(() => Admin, admin => admin.categorie)
    admin: Admin;

}
