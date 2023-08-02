import { Module } from '@nestjs/common';
import { DistrictController } from './district.controller';
import { DistrictService } from './district.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from './models/ditrict.model';

@Module({
  imports: [SequelizeModule.forFeature([District])],
  controllers: [DistrictController],
  providers: [DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
