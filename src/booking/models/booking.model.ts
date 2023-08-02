import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from '../../cart/models/cart.model';
import { Payment_method } from '../../payment_method/models/payment_method.model';
import { Delivery_method } from '../../delivery_method/model/delivery_method.model';
import { Discount_coupon } from '../../discount_coupon/model/discount_couple.model';

interface bookingAtr {
  cart_id: number;
  createdAt: string;
  fineshed: string;
  payment_method_id: number;
  delivery_method_id: number;
  discount_coupon_id: number;
  status_id: number;
}

@Table({ tableName: 'Booking' })
export class Booking extends Model<Booking, bookingAtr> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 4, description: 'karta id' })
  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cart_id: number;

  @ApiProperty({ example: '31.07.2023', description: 'karta chiqgan sana' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  createdAt: string;

  @ApiProperty({ example: '31.07.2023', description: 'karta tugagan sana' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fineshed: string;

  @ApiProperty({ example: 1, description: 'tolov usuli id' })
  @ForeignKey(() => Payment_method)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  payment_method_id: number;

  @ApiProperty({ example: 1, description: 'eltib berish usuli id' })
  @ForeignKey(() => Delivery_method)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  delivery_method_id: number;

  @ApiProperty({ example: 1, description: 'eltib berish usuli id' })
  @ForeignKey(() => Discount_coupon)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount_coupon_id: number;

  @ApiProperty({ example: 1, description: 'holat id' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @BelongsTo(() => Payment_method)
  payment_method: Payment_method;

  @BelongsTo(() => Delivery_method)
  delivery_method: Delivery_method;

  @BelongsTo(() => Discount_coupon)
  discount_coupon: Discount_coupon;
}
