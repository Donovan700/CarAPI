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
  
    async create(locationData: Partial<Location>): Promise<Location> {
      const dateDebUTC = new Date(locationData.dateDeb);
      const dateFinUTC = new Date(locationData.dateFin);
      if(dateDebUTC > dateFinUTC) {
        throw new Error("Location Date error");
        
      }
      const newLocation = this.LocationRepository.create({
          ...locationData,
          dateDeb: dateDebUTC,
          dateFin: dateFinUTC,
          dateLocation: new Date(),
      });
      return this.LocationRepository.save(newLocation);
  }

  
  async update(id: number, locationData: Partial<Location>): Promise<Location> {
    const dateDebUTC = new Date(locationData.dateDeb);
    const dateFinUTC = new Date(locationData.dateFin);

    if (dateDebUTC > dateFinUTC) {
        throw new Error("Location date error");
    }

    await this.LocationRepository.update(id, {
        ...locationData,
        dateDeb: dateDebUTC,
        dateFin: dateFinUTC,
    });

    return this.LocationRepository.findOneBy({ id })
}

  
    async remove(id: number): Promise<void> {
      await this.LocationRepository.delete(id);
    }
  }