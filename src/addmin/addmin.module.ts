import { Module } from '@nestjs/common';
import { AddminController } from './addmin.controller';
import { AddminService } from './addmin.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Admin]), JwtModule.register({})],
  controllers: [AddminController],
  providers: [AddminService],
  exports: [AddminService],
})
export class AddminModule {}
