import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/createEvent.dto';
import { Event } from './models/event.model';
import { UpdateEventDto } from './dto/updateEvent.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  //Create event
  @Post('create')
  async createEvent(@Body() createEventdto: CreateEventDto): Promise<Event> {
    return this.eventService.createEvent(createEventdto);
  }

  //Get all event
  @Get('all')
  async getAllEvent(): Promise<Event[]> {
    return this.eventService.getAllevents();
  }

  //Get event by id
  @Get(':id')
  async getEventById(@Param('id') id: number): Promise<Event> {
    return this.eventService.getEventById(id);
  }

  //Update event by id
  @Put(':id')
  async updateEventById(
    @Param('id') id: number,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    return this.eventService.updateEvent(+id, updateEventDto);
  }

  //Delete event by id
  @Delete(':id')
  async deleteEventById(@Param('id') id: number): Promise<number> {
    return this.eventService.deleteEvent(+id);
  }
}
