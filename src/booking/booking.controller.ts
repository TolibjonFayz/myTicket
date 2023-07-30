import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/createBooking.model';
import { Booking } from './models/booking.model';
import { UpdateBookingDto } from './dto/updateBooking.model';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  //Create booking
  @Post('create')
  async createCart(
    @Body() createBookingDto: CreateBookingDto,
  ): Promise<Booking> {
    return this.bookingService.createBooking(createBookingDto);
  }

  //Get all booking
  @Get('all')
  async getAllBookings(): Promise<Booking[]> {
    return this.bookingService.getAllBookings();
  }

  //Get bookings by id
  @Get(':id')
  async getBookingById(@Param('id') id: number): Promise<Booking> {
    return this.bookingService.getBookingById(id);
  }

  //Update booking by id
  @Put(':id')
  async updateBookingById(
    @Param('id') id: number,
    @Body() updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    return this.bookingService.updateBooking(+id, updateBookingDto);
  }

  //Delete booking by id
  @Delete(':id')
  async deleteBookingById(@Param('id') id: number): Promise<number> {
    return this.bookingService.deleteBooking(id);
  }
}
