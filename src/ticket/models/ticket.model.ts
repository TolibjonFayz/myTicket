import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Event } from '../../event/models/event.model';
import { Seat } from '../../seat/models/seat.model';

interface ticketAtr {
  event_id: number;
  seat_id: number;
  price: number;
  service_fee: number;
  status: number;
  ticket_type: number;
}

@Table({ tableName: 'Ticket' })
export class Ticket extends Model<Ticket, ticketAtr> {
  @ApiProperty({ example: 1, description: 'Unique id...' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Event id...' })
  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_id: number;

  @ApiProperty({ example: 1, description: 'Seat id...' })
  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seat_id: number;

  @ApiProperty({ example: 2555, description: 'Chipte narxi...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ApiProperty({ example: 1000, description: 'Xizmat haqi...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  service_fee: number;

  @ApiProperty({ example: 2, description: 'Holat id...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status: number;

  @ApiProperty({ example: 3, description: 'Chipta narxi...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticket_type: number;

  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() => Seat)
  seat: Seat;
}
