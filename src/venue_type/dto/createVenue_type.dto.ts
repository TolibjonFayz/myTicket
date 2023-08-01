import { ApiProperty } from '@nestjs/swagger';

export class CreateVenue_typeDto {
  @ApiProperty({ example: 'Yozgi', description: 'Venue turi...' })
  name: string;
}
