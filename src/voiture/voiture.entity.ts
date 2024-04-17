import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Location } from 'src/location/location.entity';
import { Categorie } from 'src/categorie/categorie.entity';
import { Admin } from 'src/admin/admin.entity';

@Entity()
export class Voiture {
    [x: string]: any;
    @PrimaryColumn({ unique: true })
    numImm: string;

    @Column()
    image: string;

    @Column()
    marque: string;

    @Column()
    model: string;

    @Column()
    couleur: string;

    @Column({ default: false })
    isLouer: boolean;

    @Column()
    prixJournalier: number;

    @Column()
    details: string;

    @Column({ default: 1 })
    adminId: number;

    @Column({ nullable: false })
    categorieId: number;

    @OneToMany(() => Location, location => location.voiture)
    location: Location[];

    @ManyToOne(() => Categorie, categorie => categorie.voiture)
    categorie: Categorie;    

    @ManyToOne(() => Admin, admin => admin.voiture)
    admin: Admin;
}