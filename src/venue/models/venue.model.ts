import { Table, Column, DataType, Model } from 'sequelize-typescript';

interface venueAtr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_id: number;
  schema: string;
  region_id: number;
  district_id: number;
}

@Table({ tableName: 'Venue' })
export class Venue extends Model<Venue, venueAtr> {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  site: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  venue_type_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  schema: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  region_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  district_id: number;
}
