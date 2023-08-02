import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface payment_methodAtrrs {
  name: string;
}

@Table({ tableName: 'Payment_method' })
export class Payment_method extends Model<Payment_method, payment_methodAtrrs> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Card', description: 'To`lov usuli...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
