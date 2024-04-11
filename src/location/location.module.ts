import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationSchema } from './location.schema';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LocationSchema])],
  providers: [LocationService],
  controllers: [LocationController],
  exports: [TypeOrmModule]
})
export class LocationModule {}