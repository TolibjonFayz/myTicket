import { Module } from '@nestjs/common';
import { SeatController } from './seat.controller';
import { SeatService } from './seat.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';

@Module({
  imports: [SequelizeModule.forFeature([Seat])],
  controllers: [SeatController],
  providers: [SeatService],
  exports: [SeatService],
})
export class SeatModule {}
