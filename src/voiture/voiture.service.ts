import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Voiture } from './voiture.entity';

@Injectable()
export class VoitureService {
    constructor(
      @InjectRepository(Voiture)
      private readonly VoitureRepository: Repository<Voiture>,
    ) {}
  
    async findAll(): Promise<Voiture[]> {
      return this.VoitureRepository.find();
    }
  
    async findOne(numImm: string): Promise<Voiture | null> {
      return this.VoitureRepository.findOneBy({ numImm });
    }
  
    async create(VoitureData: Partial<Voiture>): Promise<Voiture> {
      const newVoiture = this.VoitureRepository.create(VoitureData);
      return this.VoitureRepository.save(newVoiture);
    }
  
    async update(numImm: string, VoitureData: Partial<Voiture>): Promise<Voiture> {
      await this.VoitureRepository.update(numImm, VoitureData);
      return this.VoitureRepository.findOneBy({ numImm });
    }
  
    async remove(numImm: string): Promise<void> {
      await this.VoitureRepository.delete(numImm);
    }

    async topMostRented(): Promise<Voiture[]> {
      return this.VoitureRepository
        .createQueryBuilder("voiture")
        .leftJoinAndSelect("voiture.location", "location")
        .groupBy("voiture.numImm")
        .orderBy("COUNT(location)", "DESC")
        .limit(5)
        .getMany();
    }
}