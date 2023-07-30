import { Module } from '@nestjs/common';
import { Venue } from './venue/models/venue.model';
import { VenueModule } from './venue/venue.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { Venue_photo } from './venue_photo/models/venur-photo.model';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { Venue_type } from './venue_type/models/venue_type.model';
import { SeatModule } from './seat/seat.module';
import { Seat } from './seat/models/seat.model';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { Seat_type } from './seat_type/models/seat_type.model';
import { HumanCategoryModule } from './human_category/human_category.module';
import { EventTypeModule } from './event_type/event_type.module';
import { EventModule } from './event/event.module';
import { EventType } from './event_type/models/event_type.model';
import { Human_category } from './human_category/models/human_category.model';
import { Event } from './event/models/event.model';
import { TicketModule } from './ticket/ticket.module';
import { Ticket } from './ticket/models/ticket.model';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/models/customer.model';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerAdress } from './customer_address/models/customerAdress.model';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerCard } from './customer_card/models/customerCard.model';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/models/cart.model';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Venue,
        Venue_photo,
        Venue_type,
        Seat,
        Seat_type,
        EventType,
        Human_category,
        Event,
        Ticket,
        Customer,
        CustomerAdress,
        CustomerCard,
        Cart,
      ],
      autoLoadModels: true,
      logging: true,
    }),
    VenueModule,
    VenuePhotoModule,
    VenueTypeModule,
    SeatModule,
    SeatTypeModule,
    HumanCategoryModule,
    EventTypeModule,
    EventModule,
    TicketModule,
    CustomerModule,
    CustomerAddressModule,
    CustomerCardModule,
    CartModule,
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
