import { ApiProperty } from '@nestjs/swagger';

export class UpdateLangDto {
  @ApiProperty({ example: 'English', description: 'Til...' })
  name: string;
}
