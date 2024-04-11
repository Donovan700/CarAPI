import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { Categorie } from './categorie.entity';

@Controller('categorie')
export class CategorieController {
  constructor(private readonly CategorieService: CategorieService) {}

  @Get()
  async findAll(): Promise<Categorie[]> {
    return this.CategorieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Categorie> {
    return this.CategorieService.findOne(+id);
  }

  @Post()
  async create(@Body() CategorieData: Partial<Categorie>): Promise<Categorie> {
    return this.CategorieService.create(CategorieData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() CategorieData: Partial<Categorie>): Promise<Categorie> {
    return this.CategorieService.update(+id, CategorieData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.CategorieService.remove(+id);
  }
}
