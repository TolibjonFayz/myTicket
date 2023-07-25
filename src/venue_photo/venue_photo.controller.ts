import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { createVenuePhotoDto } from './dto/create_venuePhoto.dto';
import { Venue_photo } from './models/venur-photo.model';
import { UpdateVenuePhotoDto } from './dto/update_VenuePhoto.dto';

@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  //Create VenuePhoto
  @Post('create')
  async createVenuePhoto(
    @Body() createVenuePhotoDto: createVenuePhotoDto,
  ): Promise<Venue_photo> {
    return this.venuePhotoService.createVenuePhoto(createVenuePhotoDto);
  }

  //Get all venue_photos
  @Get('all')
  async getAllVenuePhotos(): Promise<Venue_photo[]> {
    return this.venuePhotoService.getAllVnuPhoto();
  }

  //Get venue_photo by id
  @Get(':id')
  async getVenuePhotoById(@Param('id') id: number): Promise<Venue_photo> {
    return this.venuePhotoService.getVenuePhotoById(+id);
  }

  //Update venue_photo by ud
  @Put(':id')
  async updateVenuePhoto(
    @Param('id') id: number,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto,
  ): Promise<Venue_photo> {
    return this.venuePhotoService.updateVenuePhoto(+id, updateVenuePhotoDto);
  }

  //Delete Venue_photo
  @Delete(':id')
  async deleteVenuePhoto(@Param('id') id: number): Promise<number> {
    return this.venuePhotoService.deleteVenuePhoto(+id);
  }
}
