import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly AdminRepository: Repository<Admin>,
  ) {}

  async findAll(): Promise<Admin[]> {
    return this.AdminRepository.find();
  }

  async findOne(id: number): Promise<Admin | null> {
    return this.AdminRepository.findOneBy({ id });
  }

  async create(AdminData: Partial<Admin>): Promise<Admin> {
    const newAdmin = this.AdminRepository.create(AdminData);
    return this.AdminRepository.save(newAdmin);
  }

  async update(id: number, AdminData: Partial<Admin>): Promise<Admin> {
    await this.AdminRepository.update(id, AdminData);
    return this.AdminRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.AdminRepository.delete(id);
  }
}
