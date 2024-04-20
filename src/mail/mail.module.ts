import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { ClientModule } from '../client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../client/client.entity';
import { Location } from '../location/location.entity';
import { Voiture } from '../voiture/voiture.entity';
import { ClientService } from 'src/client/client.service';
import { LocationService } from 'src/location/location.service';

@Module({
  imports: [
    ClientModule,
    TypeOrmModule.forFeature([Client, Location, Voiture]),
  ],
  controllers: [MailController],
  providers: [MailService, ClientService, LocationService],
})
export class MailModule {}
