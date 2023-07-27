import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seat_type } from './models/seat_type.model';
import { createSeatTypeDto } from './dto/createSeat_type.dto';
import { updateSeatTypeDto } from './dto/updateSeat_type.dto';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(Seat_type) private SeatTypeRepository: typeof Seat_type,
  ) {}

  //Create seatType
  async createSeatType(
    createSeatTypeDto: createSeatTypeDto,
  ): Promise<Seat_type> {
    const seatType = await this.SeatTypeRepository.create(createSeatTypeDto);
    return seatType;
  }

  //Get all seatType
  async getAllSeatTypes() {
    const seatTypes = await this.SeatTypeRepository.findAll();
    return seatTypes;
  }

  //Get seatType by id
  async getSeatTypeById(id: number) {
    const seatType = await this.SeatTypeRepository.findOne({ where: { id } });
    return seatType;
  }

  //Update seatType by id
  async updateSeatType(
    id: number,
    updateSeatTypeDto: updateSeatTypeDto,
  ): Promise<Seat_type> {
    const seatType = await this.SeatTypeRepository.update(updateSeatTypeDto, {
      where: { id },
      returning: true,
    });
    return seatType[1][0].dataValues;
  }

  //Delete seatType by id
  async deleteSeatType(id: number): Promise<number> {
    const seatType = await this.SeatTypeRepository.destroy({ where: { id } });
    return seatType;
  }
}
