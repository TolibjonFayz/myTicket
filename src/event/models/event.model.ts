import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface eventAtr {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_type_id: number;
  human_category_id: number;
  venue_id: number;
  lang_id: number;
  release_date: string;
}

@Table({ tableName: 'Event' })
export class Event extends Model<Event, eventAtr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  photo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  start_date: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  start_time: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  finish_date: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  finish_time: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  info: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_type_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  human_category_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lang_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  release_date: string;
}
