import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Get(':numPermis')
  async findOne(@Param('numPermis') numPermis: string): Promise<Client> {
    return this.clientService.findOne(+numPermis);
  }

  @Post()
  async create(@Body() clientData: Partial<Client>): Promise<Client> {
    const existingClient = await this.clientService.findOne(clientData.numPermis);
    if(existingClient) throw Error('Already existed');
    return this.clientService.create(clientData);
  }

  @Put(':numPermis')
  async update(@Param('numPermis') numPermis: string, @Body() clientData: Partial<Client>): Promise<Client> {
    return this.clientService.update(+numPermis, clientData);
  }

  @Delete(':numPermis')
  async remove(@Param('numPermis') numPermis: string): Promise<void> {
    return this.clientService.remove(+numPermis);
  }
}
