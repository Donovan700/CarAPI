import { Module } from '@nestjs/common';
import { LocationModule } from './location.module';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';

@Module({
  imports: [LocationModule],
  providers: [LocationService],
  controllers: [LocationController]
})
export class LocationHttpModule {}
