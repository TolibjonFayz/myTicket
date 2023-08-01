import { ApiProperty } from '@nestjs/swagger';

export class UpdateVenuePhotoDto {
  @ApiProperty({ example: 1, description: 'Venue id...' })
  venue_id: number;

  @ApiProperty({ example: 'aksnfjnasn.jpg', description: 'Photo url...' })
  url: string;
}
