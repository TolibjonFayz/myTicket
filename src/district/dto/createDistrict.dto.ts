import { ApiProperty } from '@nestjs/swagger';

export class CreateDistrictDto {
  @ApiProperty({ example: 'Chilonzor', description: 'Ko`cha nomi' })
  name: string;
}
