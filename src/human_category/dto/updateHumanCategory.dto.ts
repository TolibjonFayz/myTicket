import { ApiProperty } from '@nestjs/swagger';

export class UpdateHumanCategoryDto {
  @ApiProperty({ example: 'Fotima', description: 'Inson turi nomi...' })
  name: string;

  @ApiProperty({ example: 18, description: 'Inson yoshi boshi...' })
  start_age: number;

  @ApiProperty({ example: 30, description: 'Inson yoshi oxiri...' })
  finish_age: number;

  @ApiProperty({ example: 'Ayol', description: 'Inson turi...' })
  gender: string;
}
