import { ApiProperty } from '@nestjs/swagger';

export class updateSeatTypeDto {
  @ApiProperty({ example: 'Plastik', description: 'O`rindiq turi' })
  name: string;
}
