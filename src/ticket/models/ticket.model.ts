import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ticketAtr {
  event_id: number;
  seat_id: number;
  price: number;
  service_fee: number;
  status: number;
  ticket_type: number;
}

@Table({ tableName: 'Ticket' })
export class Ticket extends Model<Ticket, ticketAtr> {
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
  event_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seat_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  service_fee: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticket_type: number;
}
