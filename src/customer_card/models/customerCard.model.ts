import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from '../../customer/models/customer.model';

interface customerCardAtr {
  customer_id: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: 'CutomerCard' })
export class CustomerCard extends Model<CustomerCard, customerCardAtr> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'unique id' })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @ApiProperty({ example: 'Infin', description: 'Karta nomi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: '+99890686888', description: 'raqamiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: '9860010107751234', description: 'Karta raqami' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @ApiProperty({ example: '28', description: 'Karta amal qilish yili' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year: string;

  @ApiProperty({ example: '06', description: 'Karta oyi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  month: string;

  @ApiProperty({ example: true, description: 'karta activemi' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;

  @ApiProperty({ example: false, description: 'Karta asosiymi' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_main: boolean;

  @BelongsTo(() => Customer)
  custromer: Customer;
}
