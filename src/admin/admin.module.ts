import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminSchema } from './admin.schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdminSchema])],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [TypeOrmModule]
})
export class AdminModule {}