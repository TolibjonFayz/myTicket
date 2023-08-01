import { ApiProperty } from '@nestjs/swagger';

export class UpdateVenue_typeDto {
  @ApiProperty({ example: 'Yozgi', description: 'Venue turi...' })
  name: string;
}
