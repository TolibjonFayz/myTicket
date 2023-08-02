import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface districkAttrs {
  name: string;
}

@Table({ tableName: 'District' })
export class District extends Model<District, districkAttrs> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Chilonzor', description: 'Tuman nomi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
