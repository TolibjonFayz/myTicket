import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface delivery_methodAtrrs {
  name: string;
}

@Table({ tableName: 'Delivery_method' })
export class Delivery_method extends Model<
  Delivery_method,
  delivery_methodAtrrs
> {
  @ApiProperty({ example: 1, description: 'Unique id...' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Velo', description: 'Eltish xizmati turi...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
