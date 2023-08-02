import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue } from '../../venue/models/venue.model';

interface venue_photo_Atr {
  venue_id: number;
  url: string;
}

@Table({ tableName: 'venue-photo' })
export class Venue_photo extends Model<Venue_photo, venue_photo_Atr> {
  @ApiProperty({ example: 1, description: 'Unique id...' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Venue id...' })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venue_id: number;

  @ApiProperty({ example: 'aksnfjnasn.jpg', description: 'Photo url...' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url: string;

  @BelongsTo(() => Venue)
  venue: Venue;
}
