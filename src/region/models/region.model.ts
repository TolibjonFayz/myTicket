import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface regionAtrrs {
  name: string;
}

@Table({ tableName: 'Region' })
export class Region extends Model<Region, regionAtrrs> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Shofirkon', description: 'Tumaningiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
