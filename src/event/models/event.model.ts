import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'Falonchi', description: 'Ismingiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'jdnafisb.png', description: 'Rasm of event...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  photo: string;

  @ApiProperty({ example: '01.08.2023', description: 'Bosh sanasi...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  start_date: string;

  @ApiProperty({ example: '08:00', description: 'Vaqti boshlanish...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  start_time: string;

  @ApiProperty({ example: '01.08.2023', description: 'Vaqti tugashi...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  finish_date: string;

  @ApiProperty({ example: '13:00', description: 'Tugash soniyasi...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  finish_time: string;

  @ApiProperty({ example: 'Uzoqqa yugurish', description: 'Ma`lumotlar...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  info: string;

  @ApiProperty({ example: 1, description: 'Qanaqa turdagi event bu...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  event_type_id: number;

  @ApiProperty({ example: 1, description: 'human categorysi...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  human_category_id: number;

  @ApiProperty({ example: 2, description: 'Venue idsi...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;

  @ApiProperty({ example: 2, description: 'Lang idsi...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lang_id: number;

  @ApiProperty({ example: '02.08.2023', description: 'Chiqish vaqti...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  release_date: string;
}
