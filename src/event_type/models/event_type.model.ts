import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface eventTypeAtr {
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: 'EventType' })
export class EventType extends Model<EventType, eventTypeAtr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parent_event_type_id: number;
}
