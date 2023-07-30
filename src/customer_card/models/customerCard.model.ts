import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  customer_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  month: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_main: boolean;
}
