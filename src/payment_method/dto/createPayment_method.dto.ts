import { ApiProperty } from '@nestjs/swagger';

export class CreatePayment_methodDto {
  @ApiProperty({ example: 'Card', description: 'To`lov turi...' })
  name: string;
}
