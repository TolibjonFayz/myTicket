import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';
import { CreateSeatDto } from './dto/createSeat.dto';
import { UpdateSeatDto } from './dto/updateSeat.dto';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private SeatRepository: typeof Seat) {}

  //Create seat
  async createSeat(createSeatDto: CreateSeatDto): Promise<Seat> {
    const seat = await this.SeatRepository.create(createSeatDto);
    return seat;
  }

  //Get all venue
  async getAllSeats() {
    const seats = await this.SeatRepository.findAll();
    return seats;
  }

  //Get seat by id
  async getSeatById(id: number) {
    const seat = await this.SeatRepository.findOne({ where: { id } });
    return seat;
  }

  // //Update seat by id
  // async updateSeat(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
  //   const seat = await this.SeatRepository.update(updateSeatDto, {
  //     where: { id },
  //     returning: true,
  //   });
  //   return seat[1][0].dataValues;
  // }

  //Delete seat by id
  async deleteSeat(id: number): Promise<number> {
    const seat = await this.SeatRepository.destroy({ where: { id } });
    return seat;
  }
}
