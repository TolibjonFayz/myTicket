import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface venue_typeAtr {
  name: string;
}

@Table({ tableName: 'Venue_type' })
export class Venue_type extends Model<Venue_type, venue_typeAtr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
