import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface discount_couponAtrrs {
  name: string;
  cost: number;
}

@Table({ tableName: 'Discount_coupon' })
export class Discount_coupon extends Model<
  Discount_coupon,
  discount_couponAtrrs
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cost: number;
}
