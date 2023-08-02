import { ApiProperty } from '@nestjs/swagger';

export class UpdateRegionDto {
  @ApiProperty({ example: 'Shofirkon', description: 'Tumaningiz...' })
  name: string;
}
