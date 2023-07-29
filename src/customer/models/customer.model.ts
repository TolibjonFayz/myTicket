import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface customerAtr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: string;
  gender: number;
  lang_id: number;
  hashed_refresh_token: string;
}

@Table({ tableName: 'Customer' })
export class Customer extends Model<Customer, customerAtr> {
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
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  birth_date: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gender: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lang_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_refresh_token: string;
}
