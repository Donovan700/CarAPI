import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieSchema } from './categorie.schema';
import { CategorieController } from './categorie.controller';
import { CategorieService } from './categorie.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategorieSchema])],
  providers: [CategorieService],
  controllers: [CategorieController],
  exports: [TypeOrmModule]
})
export class CategorieModule {}