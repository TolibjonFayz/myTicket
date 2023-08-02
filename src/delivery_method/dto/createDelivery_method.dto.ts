import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryMethodDto {
  @ApiProperty({ example: 'Velo', description: 'Eltib berish xizmati turi...' })
  name: string;
}
