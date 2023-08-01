import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_id: number;

  @ApiProperty({ example: 1, description: 'Seat id...' })
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
}
