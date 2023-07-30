import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AdminAtr {
  name: string;
  login: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: boolean;
  hashed_refresh_token: boolean;
}

@Table({ tableName: 'Admin' })
export class Admin extends Model<Admin, AdminAtr> {
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
    type: DataType.STRING,
    allowNull: false,
  })
  login: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_creator: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_refresh_token: string;
}
