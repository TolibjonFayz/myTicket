import { ApiProperty } from '@nestjs/swagger';

export class UpdateDiscount_couponDto {
  @ApiProperty({ example: 1, description: 'Unique id' })
  name: string;

  @ApiProperty({ example: 30000, description: 'Chegirma narxi...' })
  cost: number;
}
