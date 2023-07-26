import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Venue_type } from './models/venue_type.model';
import { CreateVenue_typeDto } from './dto/createVenue_type.dto';
import { UpdateVenue_typeDto } from './dto/updateVenue_type.dto';

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(Venue_type) private venueTypeRepository: typeof Venue_type,
  ) {}

  //Create Venue_type
  async createVenueType(
    createVenueTypeDto: CreateVenue_typeDto,
  ): Promise<Venue_type> {
    const venue_type = await this.venueTypeRepository.create(
      createVenueTypeDto,
    );
    return venue_type;
  }

  //Get all venue_photos
  async getAllVenuePhoto() {
    const venue_types = await this.venueTypeRepository.findAll();
    return venue_types;
  }

  //Get venue_type by id
  async getVenue_typeById(id: number) {
    const venue_type = await this.venueTypeRepository.findOne({
      where: { id },
    });
    return venue_type;
  }

  //Updadte venue_type by id
  async updateVenueTypeById(
    id: number,
    updatevenueTypeDto: UpdateVenue_typeDto,
  ): Promise<Venue_type> {
    const venue_type = await this.venueTypeRepository.update(
      updatevenueTypeDto,
      { where: { id }, returning: true },
    );
    return venue_type[1][0].dataValues;
  }

  //Delete venue_type
  async deleteVenueType(id: number): Promise<number> {
    const venue_type = await this.venueTypeRepository.destroy({
      where: { id },
    });

    return venue_type;
  }
}
