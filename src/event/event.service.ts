import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { CreateEventDto } from './dto/createEvent.dto';
import { UpdateEventDto } from './dto/updateEvent.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private EventRepository: typeof Event) {}

  //Create event
  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    const event = await this.EventRepository.create(createEventDto);
    return event;
  }

  //Get all events
  async getAllevents() {
    const events = await this.EventRepository.findAll({
      include: { all: true },
    });
    return events;
  }

  //Get event by id
  async getEventById(id: number) {
    const event = await this.EventRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return event;
  }

  //Update event by id
  async updateEvent(
    id: number,
    updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    const event = await this.EventRepository.update(updateEventDto, {
      where: { id },
      returning: true,
    });
    return event[1][0].dataValues;
  }

  //Delete event by id
  async deleteEvent(id: number): Promise<number> {
    const event = await this.EventRepository.destroy({ where: { id } });
    return event;
  }
}
