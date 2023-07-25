import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface venue_photo_Atr {
  venue_id: number;
  url: string;
}

@Table({ tableName: 'venue-photo' })
export class Venue_photo extends Model<Venue_photo, venue_photo_Atr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url: string;
}
