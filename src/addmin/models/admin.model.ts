import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface AdminAtr {
  name: string;
  login: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: boolean;
  hashed_refresh_token: string;
}

@Table({ tableName: 'Admin' })
export class Admin extends Model<Admin, AdminAtr> {
  @ApiProperty({ example: '1', description: 'user id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'akmal', description: 'name of user' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'akmaljon', description: 'just username...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  login: string;

  @ApiProperty({ example: 'qwerty12', description: 'just password...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  @ApiProperty({ example: true, description: 'Admin aktivmi o`zi...' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;

  @ApiProperty({ example: false, description: 'Admin o`zi "kattami"...' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_creator: boolean;

  @ApiProperty({
    example: ',jdnsf;kjabfiparwbfipwbfipbwfueritfvawuey',
    description: 'Siz ralashmang...',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  hashed_refresh_token: string;
}
