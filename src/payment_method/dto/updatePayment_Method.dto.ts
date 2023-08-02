import { ApiProperty } from '@nestjs/swagger';

export class UpdatePayment_methodDto {
  @ApiProperty({ example: 'Card', description: 'To`lov turi...' })
  name: string;
}
