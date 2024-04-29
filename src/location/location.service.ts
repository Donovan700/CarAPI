import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { Voiture } from 'src/voiture/voiture.entity';

@Injectable()
export class LocationService {
    constructor(
      @InjectRepository(Location)
      private readonly LocationRepository: Repository<Location>,

      @InjectRepository(Voiture)
      private readonly VoitureRepository: Repository<Voiture>,
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
      
      if (dateDebUTC >= dateFinUTC) {
        throw new Error("La date de début doit être antérieure à la date de fin.");
      }
      
      const formattedDateDeb = dateDebUTC.toISOString().split('T')[0];
      const formattedDateFin = dateFinUTC.toISOString().split('T')[0];
      
      const newLocation = this.LocationRepository.create({
        ...locationData,
        dateDeb: formattedDateDeb,
        dateFin: formattedDateFin,
        dateLocation: new Date().toISOString().split('T')[0],
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

    async totalPrice(numPermis: number, dateLocation: Date): Promise<number> {
      console.log('Driving Licence:', numPermis);
      console.log('Location date:', dateLocation);

      let totalPrice = 0;

      const locations = await this.LocationRepository.find();
      const voitures = await this.VoitureRepository.find();

      locations.forEach(location => {
        const dataDateLocation = location.dateLocation.toISOString().split('T')[0];
        if(location.numPermis == numPermis && dataDateLocation == dateLocation.toISOString().split('T')[0]) {
          const matricule = location.numImm;
          console.log('Vehicles imm: ',matricule);
          voitures.forEach(voiture => {
            if(matricule == voiture.numImm) {
              const days = Math.ceil((new Date(location.dateFin).getTime() - new Date(location.dateDeb).getTime()) / (1000 * 60 * 60 * 24));
              console.log('nbr days: ',days);
              totalPrice += voiture.prixJournalier*days;
            }
          })
        }
        else console.log('No Location made at ',dataDateLocation,' by ',numPermis);
      });

      return totalPrice;
    }

    async allRentedCar(numPermis: number, dateLocation: Date): Promise<string[]> {
    
      const cars: string[] = [];
      const modelsSet = new Set<string>();
    
      const locations = await this.LocationRepository.find();
      const voitures = await this.VoitureRepository.find();
    
      locations.forEach(location => {
        const dataDateLocation = location.dateLocation.toISOString().split('T')[0];
        if (location.numPermis == numPermis && dataDateLocation == dateLocation.toISOString().split('T')[0]) {
          const matricule = location.numImm;
          console.log("Vehicle matricule: ",matricule);
            voitures.forEach(voiture => {
                if (matricule == voiture.numImm && !modelsSet.has(voiture.model)) {
                  cars.push(voiture.model);
                  modelsSet.add(voiture.model);
                }
            });
        }
      });

      console.log(cars);
    
      return cars;
    }

    async searchFreeCar(dateDeb: Date, dateFin: Date): Promise<string[]> {
      const freeCars: string[] = [];
      const dataDateDeb = dateDeb.toISOString().split('T')[0];
      const dataDateFin = dateDeb.toISOString().split('T')[0];
      
      const locations = await this.LocationRepository.find();
      const voitures = await this.VoitureRepository.find();
    
      voitures.forEach(voiture => {
        let isFree = true;
        
        locations.forEach(location => {
          if ( location.numImm == voiture.numImm && dataDateDeb >= location.dateDeb.toISOString().split('T')[0] && dataDateFin <= location.dateFin.toISOString().split('T')[0]) {
            isFree = false;
            console.log(isFree);
            if (isFree) {
              console.log(isFree);
              freeCars.push(voiture.model);
            }
          }
        });
      
      });
    
      return freeCars;
    }
    
  }