import { Module } from '@nestjs/common';
import { ClientModule } from './client.module';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [ClientModule],
  providers: [ClientService],
  controllers: [ClientController]
})
export class ClientHttpModule {}
