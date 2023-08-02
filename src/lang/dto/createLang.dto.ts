import { ApiProperty } from '@nestjs/swagger';

export class CreateLangDto {
  @ApiProperty({ example: 'English', description: 'Til...' })
  name: string;
}
