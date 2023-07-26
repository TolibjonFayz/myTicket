import { Module } from '@nestjs/common';
import { VenueTypeController } from './venue_type.controller';
import { VenueTypeService } from './venue_type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue_type } from './models/venue_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Venue_type])],
  controllers: [VenueTypeController],
  providers: [VenueTypeService],
  exports: [VenueTypeService],
})
export class VenueTypeModule {}
