import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.entity';

@Controller('location')
export class LocationController {
  constructor(private readonly LocationService: LocationService) {}

  @Get()
  async findAll(): Promise<Location[]> {
    return this.LocationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Location> {
    return this.LocationService.findOne(+id);
  }

  @Get('price/:numPermis/:dateLocation')
  async totalPrice(
      @Param('numPermis') numPermis: number,
      @Param('dateLocation') dateLocation: string
  ): Promise<number> {
      const parsedDate = new Date(dateLocation);
      return this.LocationService.totalPrice(numPermis, parsedDate);
  }

  @Get('cars/:numPermis/:dateLocation')
  async allRentedCar(
    @Param('numPermis') numPermis: number,
    @Param('dateLocation') dateLocation: string
  ): Promise<string[]> {
    const parsedDate = new Date(dateLocation);
    return this.LocationService.allRentedCar(numPermis, parsedDate);
  }

  @Get('freeCar/:dateDeb/:dateFin')
  async searchFreeCar(
    @Param('dateDeb') dateDeb: string,
    @Param('dateFin') dateFin: string
  ): Promise<string[]> {
    const parseDateDeb = new Date(dateDeb);
    const parseDateFin = new Date(dateFin);
    return this.LocationService.searchFreeCar(parseDateDeb,parseDateFin);
  }

  @Post()
  async create(@Body() LocationData: Partial<Location>): Promise<Location> {
    return this.LocationService.create(LocationData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() LocationData: Partial<Location>): Promise<Location> {
    return this.LocationService.update(+id, LocationData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.LocationService.remove(+id);
  }
}
