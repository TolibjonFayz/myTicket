import { ApiProperty } from '@nestjs/swagger';

export class createSeatTypeDto {
  @ApiProperty({ example: 'Plastik', description: 'O`rindiq turi' })
  name: string;
}
