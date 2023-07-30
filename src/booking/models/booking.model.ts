import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cart_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  createdAt: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fineshed: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  payment_method_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  delivery_method_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount_coupon_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id: number;
}
