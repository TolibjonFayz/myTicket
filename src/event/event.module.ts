import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './models/event.model';

@Module({
  imports: [SequelizeModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
