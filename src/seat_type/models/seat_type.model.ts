import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface seatTypeAtr {
  name: string;
}

@Table({ tableName: 'Seat_type' })
export class Seat_type extends Model<Seat_type, seatTypeAtr> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Plastik', description: 'O`rindiq turi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
