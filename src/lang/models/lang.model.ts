import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface langAtrrs {
  name: string;
}
@Table({ tableName: 'Lang' })
export class Lang extends Model<Lang, langAtrrs> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'English', description: 'Til...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
