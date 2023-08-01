import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface venue_typeAtr {
  name: string;
}

@Table({ tableName: 'Venue_type' })
export class Venue_type extends Model<Venue_type, venue_typeAtr> {
  @ApiProperty({ example: 1, description: 'Unique id...' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'Yozgi', description: 'Venue turi...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
