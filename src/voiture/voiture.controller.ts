import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VoitureService } from './voiture.service';
import { Voiture } from './voiture.entity';

@Controller('voiture')
export class VoitureController {
  constructor(private readonly VoitureService: VoitureService) {}

  @Get()
  async findAll(): Promise<Voiture[]> {
    return this.VoitureService.findAll();
  }

  @Get(':numImm')
  async findOne(@Param('numImm') numImm: string): Promise<Voiture> {
    return this.VoitureService.findOne(numImm);
  }

  @Get('top')
  async topMostRented(): Promise<Voiture[]> {
    return this.VoitureService.topMostRented();
  }

  @Post()
  async create(@Body() voitureData: Partial<Voiture>): Promise<Voiture> {
    const existingVoiture = await this.VoitureService.findOne(voitureData.numImm);
    if (existingVoiture) {
      throw new Error('Already existed');
    }
    return this.VoitureService.create(voitureData);
  }

  @Put(':numImm')
  async update(@Param('numImm') numImm: string, @Body() VoitureData: Partial<Voiture>): Promise<Voiture> {
    return this.VoitureService.update(numImm, VoitureData);
  }

  @Delete(':numImm')
  async remove(@Param('numImm') numImm: string): Promise<void> {
    return this.VoitureService.remove(numImm);
  }
}
