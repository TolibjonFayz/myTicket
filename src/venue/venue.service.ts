import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';
import { CreateVenueDto } from './dto/createVenur.dto';
import { UpdateVenueDto } from './dto/updateVenue.dto';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepository: typeof Venue) {}

  //Create venue
  async createVenue(createVanuedto: CreateVenueDto): Promise<Venue> {
    const venue = await this.venueRepository.create(createVanuedto);
    return venue;
  }

  //Get all venue
  async getAllVenues() {
    const venues = await this.venueRepository.findAll();
    return venues;
  }

  //Get venue by id
  async getVenueById(id: number) {
    const venue = await this.venueRepository.findOne({ where: { id } });
    return venue;
  }

  //Update venue by id
  async updateVenue(
    id: number,
    updateVenueDto: UpdateVenueDto,
  ): Promise<Venue> {
    const venue = await this.venueRepository.update(updateVenueDto, {
      where: { id },
      returning: true,
    });
    return venue[1][0].dataValues;
  }

  //Delete venue by id
  async deleteVenue(id: number): Promise<number> {
    const venue = await this.venueRepository.destroy({ where: { id } });
    return venue;
  }
}
