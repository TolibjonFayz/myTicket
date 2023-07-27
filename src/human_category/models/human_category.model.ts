import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface human_categoryAtr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: string;
}

@Table({ tableName: 'Human_category' })
export class Human_category extends Model<Human_category, human_categoryAtr> {
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
  start_age: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  finish_age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  gender: string;
}
