import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findOne(numPermis: number): Promise<Client | null> {
    return this.clientRepository.findOneBy({ numPermis });
  }

  async create(clientData: Partial<Client>): Promise<Client> {
    const newClient = this.clientRepository.create(clientData);
    return this.clientRepository.save(newClient);
  }

  async update(numPermis: number, clientData: Partial<Client>): Promise<Client> {
    await this.clientRepository.update(numPermis, clientData);
    return this.clientRepository.findOneBy({ numPermis });
  }

  async remove(numPermis: number): Promise<void> {
    await this.clientRepository.delete(numPermis);
  }
}
