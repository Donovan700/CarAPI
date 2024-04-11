import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorie } from './categorie.entity';

@Injectable()
export class CategorieService {
    constructor(
      @InjectRepository(Categorie)
      private readonly CategorieRepository: Repository<Categorie>,
    ) {}
  
    async findAll(): Promise<Categorie[]> {
      return this.CategorieRepository.find();
    }
  
    async findOne(id: number): Promise<Categorie | null> {
      return this.CategorieRepository.findOneBy({ id });
    }
  
    async create(CategorieData: Partial<Categorie>): Promise<Categorie> {
      const newCategorie = this.CategorieRepository.create(CategorieData);
      return this.CategorieRepository.save(newCategorie);
    }
  
    async update(id: number, CategorieData: Partial<Categorie>): Promise<Categorie> {
      await this.CategorieRepository.update(id, CategorieData);
      return this.CategorieRepository.findOneBy({ id });
    }
  
    async remove(id: number): Promise<void> {
      await this.CategorieRepository.delete(id);
    }
  }