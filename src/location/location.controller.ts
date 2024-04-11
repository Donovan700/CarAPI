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
