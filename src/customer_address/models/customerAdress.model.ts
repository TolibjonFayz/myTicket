import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from '../../customer/models/customer.model';
import { Country } from '../../country/models/country.model';
import { Region } from '../../region/models/region.model';
import { District } from '../../district/models/ditrict.model';

interface customerAdressAtr {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: 'CustomerAdress' })
export class CustomerAdress extends Model<CustomerAdress, customerAdressAtr> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Unique id' })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @ApiProperty({ example: 'Ism', description: 'Ismingiz' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 1, description: 'Davlat id' })
  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  country_id: number;

  @ApiProperty({ example: 1, description: 'Region id' })
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  region_id: number;

  @ApiProperty({ example: 1, description: 'Ko`cha id' })
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  district_id: number;

  @ApiProperty({ example: 'Toshkent', description: 'Shahar id...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street: string;

  @ApiProperty({ example: '16-kv', description: 'uyingiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  house: string;

  @ApiProperty({ example: '8-dom', description: 'kvartirayiz...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  flat: number;

  @ApiProperty({ example: 'Shuhrat', description: 'Yashash locationiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @ApiProperty({ example: '155453', description: 'Pochta manzilingiz' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  post_index: string;

  @ApiProperty({ example: '2-xonali', description: 'Qo`shimcha ma`lumotlar' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  info: string;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Country)
  country: Country;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;
}
