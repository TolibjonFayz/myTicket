import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface eventTypeAtr {
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: 'EventType' })
export class EventType extends Model<EventType, eventTypeAtr> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Tohirjon', description: 'Event type nomi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 1, description: 'Event type idsi' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parent_event_type_id: number;
}
