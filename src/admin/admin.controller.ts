import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly AdminService: AdminService) {}

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.AdminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Admin> {
    return this.AdminService.findOne(+id);
  }

  @Post()
  async create(@Body() AdminData: Partial<Admin>): Promise<Admin> {
    return this.AdminService.create(AdminData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() AdminData: Partial<Admin>): Promise<Admin> {
    return this.AdminService.update(+id, AdminData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.AdminService.remove(+id);
  }
}
