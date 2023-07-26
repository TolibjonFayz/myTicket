import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { Venue_type } from './models/venue_type.model';
import { CreateVenue_typeDto } from './dto/createVenue_type.dto';
import { UpdateVenue_typeDto } from './dto/updateVenue_type.dto';

@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  //Create venue_type
  @Post('create')
  async createVenueType(
    @Body() createVenueTypeDto: CreateVenue_typeDto,
  ): Promise<Venue_type> {
    return this.venueTypeService.createVenueType(createVenueTypeDto);
  }

  //Get all venue_type
  @Get('all')
  async getAllVenueType(): Promise<Venue_type[]> {
    return this.venueTypeService.getAllVenuePhoto();
  }

  //Get venue_type by id
  @Get(':id')
  async getVenueTypeById(@Param('id') id: number): Promise<Venue_type> {
    return this.venueTypeService.getVenue_typeById(id);
  }

  //Update venue_type by id
  @Put(':id')
  async updateVenueTypeById(
    @Param('id') id: number,
    @Body() updateVenueTypeDto: UpdateVenue_typeDto,
  ): Promise<Venue_type> {
    return this.venueTypeService.updateVenueTypeById(+id, updateVenueTypeDto);
  }

  //Delete venue_type
  @Delete(':id')
  async deleteVenue_typeById(@Param('id') id: number): Promise<number> {
    return this.venueTypeService.deleteVenueType(id);
  }
}
