import { Module } from '@nestjs/common';
import { SeatTypeController } from './seat_type.controller';
import { SeatTypeService } from './seat_type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat_type } from './models/seat_type.model';
import { SeatService } from '../seat/seat.service';

@Module({
  imports: [SequelizeModule.forFeature([Seat_type])],
  controllers: [SeatTypeController],
  providers: [SeatTypeService],
  exports: [SeatTypeService],
})
export class SeatTypeModule {}
