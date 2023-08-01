import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookingDto {
  @ApiProperty({ example: 1, description: 'Kartaning "id"si' })
  cart_id: number;

  @ApiProperty({
    example: 'sana...',
    description: 'Kartaning chiqarilgan sana',
  })
  createdAt: string;

  @ApiProperty({ example: 'sana...', description: 'Kartaning tugatilgan sana' })
  fineshed: string;

  @ApiProperty({ example: 1, description: 'Naxt yoki karta' })
  payment_method_id: number;

  @ApiProperty({ example: 2, description: 'VElik yoki moshin' })
  delivery_method_id: number;

  @ApiProperty({ example: 3, description: 'SMT...' })
  discount_coupon_id: number;

  @ApiProperty({ example: 1, description: 'SMT...' })
  status_id: number;
}
