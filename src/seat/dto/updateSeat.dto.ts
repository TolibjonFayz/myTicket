import { ApiProperty } from '@nestjs/swagger';

export class UpdateSeatDto {
  @ApiProperty({ example: 1, description: 'Sektor' })
  sector: number;

  @ApiProperty({ example: 2, description: 'Qator raqami' })
  row_number: number;

  @ApiProperty({ example: 3, description: 'O`rindiq raqami' })
  number: number;

  @ApiProperty({ example: 3, description: 'Venue raqami' })
  venue_id: number;

  @ApiProperty({ example: 3, description: 'O`rindiq turi raqami' })
  seat_type_id: number;

  @ApiProperty({ example: 'kjniabsfi', description: 'O`rindiq joylashuvi' })
  location_in_schema: string;
}
