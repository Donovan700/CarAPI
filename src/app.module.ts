import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Admin } from './admin/admin.entity';
import { Client } from './client/client.entity';
import { Location } from './location/location.entity';
import { Voiture } from './voiture/voiture.entity';
import { Categorie } from './categorie/categorie.entity';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { LocationModule } from './location/location.module';
import { VoitureModule } from './voiture/voiture.module';
import { CategorieModule } from './categorie/categorie.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'CarRent',
      entities: [Client, Admin, Location, Voiture, Categorie],
      synchronize: true,
    }), ClientModule, AdminModule, LocationModule, VoitureModule, CategorieModule, MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
