import { Module } from '@nestjs/common';
import { Venue } from './venue/models/venue.model';
import { VenueModule } from './venue/venue.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { Venue_photo } from './venue_photo/models/venur-photo.model';

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
      models: [Venue, Venue_photo],
      autoLoadModels: true,
      logging: true,
    }),
    VenueModule,
    VenuePhotoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
