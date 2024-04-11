import { Module } from '@nestjs/common';
import { CategorieModule } from './categorie.module';
import { CategorieService } from './categorie.service';
import { CategorieController } from './categorie.controller';

@Module({
  imports: [CategorieModule],
  providers: [CategorieService],
  controllers: [CategorieController]
})
export class CategorieHttpModule {}
