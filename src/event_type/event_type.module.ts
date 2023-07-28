import { Module } from '@nestjs/common';
import { EventTypeController } from './event_type.controller';
import { EventTypeService } from './event_type.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';

@Module({
  imports: [SequelizeModule.forFeature([EventType])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
  exports: [EventTypeService],
})
export class EventTypeModule {}
