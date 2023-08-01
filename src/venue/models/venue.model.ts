import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: 1, description: 'Unique id...' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'Humo arena',
    description: 'Musobaqa bo`ladigan joy nomi',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'Xalqlar do`stligi', description: 'Manzil...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({ example: 'Xalqlar do`stligi', description: 'Manzil...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @ApiProperty({ example: 'xalqlardostligi.uz', description: 'Sayti...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  site: string;

  @ApiProperty({ example: '+998900000000', description: 'Raqami...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: 1, description: 'Venue type id...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  venue_type_id: number;

  @ApiProperty({ example: 'Sxema', description: 'Sxema...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  schema: string;

  @ApiProperty({ example: 1, description: 'Region id...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  region_id: number;

  @ApiProperty({ example: 2, description: 'District id...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  district_id: number;
}
