import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface seatAtr {
  sector: number;
  row_number: number;
  number: number;
  venue_id: number;
  seat_type_id: number;
  location_in_schema: string;
}

@Table({ tableName: 'Seat' })
export class Seat extends Model<Seat, seatAtr> {
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
  sector: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  row_number: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seat_type_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location_in_schema: number;
}
