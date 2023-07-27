import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface seatTypeAtr {
  name: string;
}

@Table({ tableName: 'Seat_type' })
export class Seat_type extends Model<Seat_type, seatTypeAtr> {
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
}
