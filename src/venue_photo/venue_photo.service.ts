import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Venue_photo } from './models/venur-photo.model';
import { createVenuePhotoDto } from './dto/create_venuePhoto.dto';
import { UpdateVenuePhotoDto } from './dto/update_VenuePhoto.dto';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(Venue_photo) private venuePhotoRepository: typeof Venue_photo,
  ) {}

  //Create venuePhoto
  async createVenuePhoto(
    createVenuePhotoDto: createVenuePhotoDto,
  ): Promise<Venue_photo> {
    const venuePhoto = await this.venuePhotoRepository.create(
      createVenuePhotoDto,
    );
    return venuePhoto;
  }

  //Get all venuePhotos
  async getAllVnuPhoto() {
    const venue_photos = await this.venuePhotoRepository.findAll({
      include: { all: true },
    });
    return venue_photos;
  }

  //Get venuePhoto by id
  async getVenuePhotoById(id: number) {
    const venue = await this.venuePhotoRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return venue;
  }

  //Update venuePhoto by id
  async updateVenuePhoto(
    id: number,
    updateVenuePhotoDto: UpdateVenuePhotoDto,
  ): Promise<Venue_photo> {
    const venue = await this.venuePhotoRepository.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
    return venue[1][0].dataValues;
  }

  //Delete venuePhoto by id
  async deleteVenuePhoto(id: number): Promise<number> {
    const venue = await this.venuePhotoRepository.destroy({ where: { id } });
    return venue;
  }
}
