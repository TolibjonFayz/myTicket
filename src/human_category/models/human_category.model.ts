import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface human_categoryAtr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: string;
}

@Table({ tableName: 'Human_category' })
export class Human_category extends Model<Human_category, human_categoryAtr> {
  @ApiProperty({ example: 1, description: 'Unique id...' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Fotima', description: 'Inson turi nomi...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 18, description: 'Inson yoshi boshi...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  start_age: number;

  @ApiProperty({ example: 30, description: 'Inson yoshi oxiri...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  finish_age: number;

  @ApiProperty({ example: 'Ayol', description: 'Inson turi...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  gender: string;
}
