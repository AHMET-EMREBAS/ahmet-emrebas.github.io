import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from '@techbir/entities';
import { DepartmentResolver } from './department.resolver';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentController],
  providers: [DepartmentService, DepartmentResolver],
})
export class DepartmentModule {}
