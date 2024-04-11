import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
    constructor(
      @InjectRepository(Location)
      private readonly LocationRepository: Repository<Location>,
    ) {}
  
    async findAll(): Promise<Location[]> {
      return this.LocationRepository.find();
    }
  
    async findOne(id: number): Promise<Location | null> {
      return this.LocationRepository.findOneBy({ id });
    }
  
    async create(LocationData: Partial<Location>): Promise<Location> {
      const newLocation = this.LocationRepository.create(LocationData);
      return this.LocationRepository.save(newLocation);
    }
  
    async update(id: number, LocationData: Partial<Location>): Promise<Location> {
      await this.LocationRepository.update(id, LocationData);
      return this.LocationRepository.findOneBy({ id });
    }
  
    async remove(id: number): Promise<void> {
      await this.LocationRepository.delete(id);
    }
  }