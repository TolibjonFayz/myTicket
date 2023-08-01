import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface seatAtr {
  sector: number;
  row_number: number;
  number: number;
  venue_id: number;
  seat_type_id: number;
  location_in_schema: string;
}

@Table({ tableName: 'Seat' })
export class Seat extends Model<Seat, seatAtr> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Sektor' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sector: number;

  @ApiProperty({ example: 2, description: 'Qator raqami' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  row_number: number;

  @ApiProperty({ example: 3, description: 'O`rindiq raqami' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number: number;

  @ApiProperty({ example: 3, description: 'Venue raqami' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;

  @ApiProperty({ example: 3, description: 'O`rindiq turi raqami' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seat_type_id: number;

  @ApiProperty({ example: 'kjniabsfi', description: 'O`rindiq joylashuvi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location_in_schema: number;
}
