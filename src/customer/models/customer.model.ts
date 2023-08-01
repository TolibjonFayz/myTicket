import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface customerAtr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: string;
  gender: number;
  lang_id: number;
  hashed_refresh_token: string;
}

@Table({ tableName: 'Customer' })
export class Customer extends Model<Customer, customerAtr> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Eshmat', description: 'Ismingiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({ example: 'Toshmatov', description: 'Familiyangiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @ApiProperty({ example: '9989056546', description: 'Raqamingiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: 'password', description: 'Parolingiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  @ApiProperty({ example: 'falinchi@gmail.com', description: 'Emialingiz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '21.11.2002', description: 'Tugilgan kuniz...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  birth_date: string;

  @ApiProperty({ example: 1, description: 'Genderingiz...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gender: number;

  @ApiProperty({ example: 1, description: 'idsi...' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lang_id: number;

  @ApiProperty({
    example: 'token',
    description: 'tokeningiz hash qilingani...',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_refresh_token: string;
}
