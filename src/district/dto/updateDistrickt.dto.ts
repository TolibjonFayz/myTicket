import { ApiProperty } from '@nestjs/swagger';

export class UpdateDistrictDto {
  @ApiProperty({ example: 'Chilonzor', description: 'Ko`cha nomi' })
  name: string;
}
