import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface customerAdressAtr {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: 'CustomerAdress' })
export class CustomerAdress extends Model<CustomerAdress, customerAdressAtr> {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  country_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  region_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  district_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  house: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  flat: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  post_index: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  info: string;
}
