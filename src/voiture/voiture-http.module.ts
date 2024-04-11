import { Module } from '@nestjs/common';
import { VoitureModule } from './voiture.module';
import { VoitureService } from './voiture.service';
import { VoitureController } from './voiture.controller';

@Module({
  imports: [VoitureModule],
  providers: [VoitureService],
  controllers: [VoitureController]
})
export class VoitureHttpModule {}
