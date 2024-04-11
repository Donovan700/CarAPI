import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoitureSchema } from './voiture.schema';
import { VoitureService } from './voiture.service';
import { VoitureController } from './voiture.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VoitureSchema])],
  providers: [VoitureService],
  controllers: [VoitureController],
  exports: [TypeOrmModule]
})
export class VoitureModule {}