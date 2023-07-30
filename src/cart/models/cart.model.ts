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
  ticket_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  createdAt: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fineshedAt: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id: number;
}
