import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';
import { CreateBookingDto } from './dto/createBooking.model';
import { UpdateBookingDto } from './dto/updateBooking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private BookingRepository: typeof Booking,
  ) {}

  //Create booking
  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = await this.BookingRepository.create(createBookingDto);
    return booking;
  }

  //Get all bookings
  async getAllBookings() {
    const bookings = await this.BookingRepository.findAll();
    return bookings;
  }

  //Get booking by id
  async getBookingById(id: number) {
    const booking = await this.BookingRepository.findOne({ where: { id } });
    return booking;
  }

  //Update booking by id
  async updateBooking(
    id: number,
    updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    const booking = await this.BookingRepository.update(updateBookingDto, {
      where: { id },
      returning: true,
    });
    return booking[1][0].dataValues;
  }

  //Delete booking by id
  async deleteBooking(id: number): Promise<number> {
    const cart = await this.BookingRepository.destroy({ where: { id } });
    return cart;
  }
}
