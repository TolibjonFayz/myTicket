import { ApiProperty } from '@nestjs/swagger';

export class UpdateDeliveryMethodDto {
  @ApiProperty({ example: 'Velo', description: 'Eltib berish xizmati turi...' })
  name: string;
}
