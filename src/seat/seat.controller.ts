import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/createSeat.dto';
import { Seat } from './models/seat.model';
import { UpdateSeatDto } from './dto/updateSeat.dto';

@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  //Create seat
  @Post('create')
  async createSeat(@Body() createSeatdto: CreateSeatDto): Promise<Seat> {
    return this.seatService.createSeat(createSeatdto);
  }

  //Get all seat
  @Get('all')
  async getAllSeat(): Promise<Seat[]> {
    return this.seatService.getAllSeats();
  }

  //Get seat by id
  @Get(':id')
  async getSeatById(@Param('id') id: number): Promise<Seat> {
    return this.seatService.getSeatById(id);
  }

  // //Update seat by id
  // @Put(':id')
  // async updateSeear  ById(
  //   @Param('id') id: number,
  //   @Body() updateSeatDto: UpdateSeatDto,
  // ): Promise<Seat> {
  //   return this.seatService.updateSeat(+id, updateSeatDto);
  // }

  //Delete seat by id
  @Delete(':id')
  async deleteSeatById(@Param('id') id: number): Promise<number> {
    return this.seatService.deleteSeat(+id);
  }
}
