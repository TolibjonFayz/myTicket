import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateVenueDto } from './dto/createVenur.dto';
import { Venue } from './models/venue.model';
import { VenueService } from './venue.service';
import { UpdateVenueDto } from './dto/updateVenue.dto';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  //Create venue
  @Post('create')
  async createVenue(@Body() createVenuedto: CreateVenueDto): Promise<Venue> {
    return this.venueService.createVenue(createVenuedto);
  }

  //Get all venue
  @Get('all')
  async getAllVenue(): Promise<Venue[]> {
    return this.venueService.getAllVenues();
  }

  //Get venue by id
  @Get(':id')
  async getVenueById(@Param('id') id: number): Promise<Venue> {
    return this.venueService.getVenueById(id);
  }

  //Update venue by id
  @Put(':id')
  async updateVenueById(
    @Param('id') id: number,
    @Body() updateVenueDto: UpdateVenueDto,
  ): Promise<Venue> {
    return this.venueService.updateVenue(+id, updateVenueDto);
  }

  //Delete venue by id
  @Delete(':id')
  async deleteVeneById(@Param('id') id: number): Promise<number> {
    return this.venueService.deleteVenue(+id);
  }
}
