import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerAdressDto {
  @ApiProperty({ example: 1, description: 'Unique id' })
  customer_id: number;

  @ApiProperty({ example: 'Ism', description: 'Ismingiz' })
  name: string;

  @ApiProperty({ example: 1, description: 'Davlat id' })
  country_id: number;

  @ApiProperty({ example: 1, description: 'Region id' })
  region_id: number;

  @ApiProperty({ example: 1, description: 'Ko`cha id' })
  district_id: number;

  @ApiProperty({ example: 'Toshkent', description: 'Shahar id...' })
  street: string;

  @ApiProperty({ example: '16-kv', description: 'uyingiz...' })
  house: string;

  @ApiProperty({ example: '8-dom', description: 'kvartirayiz...' })
  flat: number;

  @ApiProperty({ example: 'Shuhrat', description: 'Yashash locationiz...' })
  location: string;

  @ApiProperty({ example: '155453', description: 'Pochta manzilingiz' })
  post_index: string;

  @ApiProperty({ example: '2-xonali', description: 'Qo`shimcha ma`lumotlar' })
  info: string;
}
