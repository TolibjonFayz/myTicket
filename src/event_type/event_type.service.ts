import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';
import { CreateEventTypeDto } from './dto/createEventType.dto';
import { UpdateEventTypeDto } from './dto/updateEventType.dto';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private EventTypeRepository: typeof EventType,
  ) {}

  //Create eventType
  async createEventType(
    createEventTyprDto: CreateEventTypeDto,
  ): Promise<EventType> {
    const event_type = await this.EventTypeRepository.create(
      createEventTyprDto,
    );
    return event_type;
  }

  //Get all event types
  async getAllEventTypes() {
    const event_types = await this.EventTypeRepository.findAll();
    return event_types;
  }

  //Get eventType by id
  async getEventTypeById(id: number) {
    const eventType = await this.EventTypeRepository.findOne({ where: { id } });
    return eventType;
  }

  //Update eventType by id
  async updateEventType(
    id: number,
    updateEventTypeDto: UpdateEventTypeDto,
  ): Promise<EventType> {
    const eventType = await this.EventTypeRepository.update(
      updateEventTypeDto,
      {
        where: { id },
        returning: true,
      },
    );
    return eventType[1][0].dataValues;
  }

  //Delete event type by id
  async deleteEventType(id: number): Promise<number> {
    const eventType = await this.EventTypeRepository.destroy({ where: { id } });
    return eventType;
  }
}
