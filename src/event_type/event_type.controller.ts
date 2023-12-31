import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/createEventType.dto';
import { EventType } from './models/event_type.model';
import { UpdateEventTypeDto } from './dto/updateEventType.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Event type')
@Controller('event-type')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  //Create EventType
  @ApiOperation({ summary: 'Create eventType' })
  @Post('create')
  async createSeat(
    @Body() createEventTypeDto: CreateEventTypeDto,
  ): Promise<EventType> {
    return this.eventTypeService.createEventType(createEventTypeDto);
  }

  //Get all eventType
  @ApiOperation({ summary: 'Get all eventType' })
  @Get('all')
  async getAllEventType(): Promise<EventType[]> {
    return this.eventTypeService.getAllEventTypes();
  }

  //Get eventType by id
  @ApiOperation({ summary: 'Get eventType by id' })
  @Get(':id')
  async getEventTyeById(@Param('id') id: number): Promise<EventType> {
    return this.eventTypeService.getEventTypeById(id);
  }

  //Update seat by id
  @ApiOperation({ summary: 'Update eventType by id' })
  @Put(':id')
  async updateEventTypeById(
    @Param('id') id: number,
    @Body() updateEventTypeDto: UpdateEventTypeDto,
  ): Promise<EventType> {
    return this.eventTypeService.updateEventType(+id, updateEventTypeDto);
  }

  //Delete seat by id
  @ApiOperation({ summary: 'Delete eventType by id' })
  @Delete(':id')
  async deleteSeatById(@Param('id') id: number): Promise<number> {
    return this.eventTypeService.deleteEventType(+id);
  }
}
