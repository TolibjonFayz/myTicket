import { ApiProperty } from '@nestjs/swagger';

export class CreateVenueDto {
  @ApiProperty({
    example: 'Humo arena',
    description: 'Musobaqa bo`ladigan joy nomi',
  })
  name: string;

  @ApiProperty({ example: 'Xalqlar do`stligi', description: 'Manzil...' })
  address: string;

  @ApiProperty({ example: 'Xalqlar do`stligi', description: 'Manzil...' })
  location: string;

  @ApiProperty({ example: 'xalqlardostligi.uz', description: 'Sayti...' })
  site: string;

  @ApiProperty({ example: '+998900000000', description: 'Raqami...' })
  phone: string;

  @ApiProperty({ example: 1, description: 'Venue type id...' })
  venue_type_id: number;

  @ApiProperty({ example: 'Sxema', description: 'Sxema...' })
  schema: string;

  @ApiProperty({ example: 1, description: 'Region id...' })
  region_id: number;

  @ApiProperty({ example: 2, description: 'District id...' })
  district_id: number;
}
