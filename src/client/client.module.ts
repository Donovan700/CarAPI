import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientSchema } from './client.schema';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientSchema])],
  providers: [ClientService],
  controllers: [ClientController],
  exports: [TypeOrmModule]
})
export class ClientModule {}