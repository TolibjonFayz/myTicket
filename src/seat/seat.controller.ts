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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Seat')
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  //Create seat
  @ApiOperation({ summary: 'Create operation' })
  @Post('create')
  async createSeat(@Body() createSeatdto: CreateSeatDto): Promise<Seat> {
    return this.seatService.createSeat(createSeatdto);
  }

  //Get all seat
  @ApiOperation({ summary: 'Get all operations' })
  @Get('all')
  async getAllSeat(): Promise<Seat[]> {
    return this.seatService.getAllSeats();
  }

  //Get seat by id
  @ApiOperation({ summary: 'Get operation by id' })
  @Get(':id')
  async getSeatById(@Param('id') id: number): Promise<Seat> {
    return this.seatService.getSeatById(id);
  }

  // //Update seat by id
  @ApiOperation({ summary: 'Update operation by id' })
  // @Put(':id')
  // async updateSeear  ById(
  //   @Param('id') id: number,
  //   @Body() updateSeatDto: UpdateSeatDto,
  // ): Promise<Seat> {
  //   return this.seatService.updateSeat(+id, updateSeatDto);
  // }

  //Delete seat by id
  @ApiOperation({ summary: 'Delete operation by id' })
  @Delete(':id')
  async deleteSeatById(@Param('id') id: number): Promise<number> {
    return this.seatService.deleteSeat(+id);
  }
}
