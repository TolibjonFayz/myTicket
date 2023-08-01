import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface cartAtr {
  ticket_id: number;
  customer_id: number;
  createdAt: string;
  fineshedAt: string;
  status_id: number;
}

@Table({ tableName: 'Cart' })
export class Cart extends Model<Cart, cartAtr> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'chiptaning idsi' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticket_id: number;

  @ApiProperty({ example: 1, description: 'xaridorning idsi' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @ApiProperty({ example: '01.08.2023', description: 'Yaratilgan vaqti' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  createdAt: string;

  @ApiProperty({ example: '02.08.2023', description: 'Tugatilgan vaqti' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fineshedAt: string;

  @ApiProperty({ example: 1, description: 'Holat idsi' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id: number;
}
