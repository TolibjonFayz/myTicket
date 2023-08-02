import { ApiProperty } from '@nestjs/swagger';

export class CreateRegionDto {
  @ApiProperty({ example: 'Shofirkon', description: 'Tumaningiz...' })
  name: string;
}
