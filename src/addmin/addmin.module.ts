import { Module } from '@nestjs/common';
import { AddminController } from './addmin.controller';
import { AddminService } from './addmin.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';

@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  controllers: [AddminController],
  providers: [AddminService],
  exports: [AddminService],
})
export class AddminModule {}
