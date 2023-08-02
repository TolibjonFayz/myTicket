import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface countryAtrrs {
  name: string;
}

@Table({ tableName: 'Country' })
export class Country extends Model<Country, countryAtrrs> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Uzbekistan', description: 'Davlat' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
