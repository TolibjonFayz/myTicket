import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { createSeatTypeDto } from './dto/createSeat_type.dto';
import { Seat_type } from './models/seat_type.model';
import { updateSeatTypeDto } from './dto/updateSeat_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Seat-type')
@Controller('seat-type')
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  //Create seatType
  @ApiOperation({ summary: 'Create seat-type' })
  @Post('create')
  async createSeatType(
    @Body() createSeatTypedto: createSeatTypeDto,
  ): Promise<Seat_type> {
    return this.seatTypeService.createSeatType(createSeatTypedto);
  }

  //Get all seatType
  @ApiOperation({ summary: 'Get all seat-types' })
  @Get('all')
  async getAllSeatType(): Promise<Seat_type[]> {
    return this.seatTypeService.getAllSeatTypes();
  }

  //Get seatType by id
  @ApiOperation({ summary: 'Get seat-type by id' })
  @Get(':id')
  async getSeatTypeById(@Param('id') id: number): Promise<Seat_type> {
    return this.seatTypeService.getSeatTypeById(id);
  }

  //Update seat by id
  @ApiOperation({ summary: 'Update seat-type by id' })
  @Put(':id')
  async updateSeatTypeById(
    @Param('id') id: number,
    @Body() updateSeatTypedto: updateSeatTypeDto,
  ): Promise<Seat_type> {
    return this.seatTypeService.updateSeatType(+id, updateSeatTypedto);
  }

  //Delete seat by id
  @ApiOperation({ summary: 'Delete seat-type by id' })
  @Delete(':id')
  async deleteSeatTypeById(@Param('id') id: number): Promise<number> {
    return this.seatTypeService.deleteSeatType(+id);
  }
}
