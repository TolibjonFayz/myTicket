import { Module } from '@nestjs/common';
import { VenuePhotoController } from './venue_photo.controller';
import { VenuePhotoService } from './venue_photo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue_photo } from './models/venur-photo.model';

@Module({
  imports: [SequelizeModule.forFeature([Venue_photo])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
  exports: [VenuePhotoService],
})
export class VenuePhotoModule {}
