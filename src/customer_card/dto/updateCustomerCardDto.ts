import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerCardDto {
  @ApiProperty({ example: 1, description: 'unique id' })
  customer_id: number;

  @ApiProperty({ example: 'Infin', description: 'Karta nomi' })
  name: string;

  @ApiProperty({ example: '+99890686888', description: 'raqamiz...' })
  phone: string;

  @ApiProperty({ example: '9860010107751234', description: 'Karta raqami' })
  number: string;

  @ApiProperty({ example: '06/28', description: 'Karta amal qilish vaqti' })
  year: string;

  @ApiProperty({ example: '06', description: 'Karta oyi' })
  month: string;

  @ApiProperty({ example: true, description: 'karta activemi' })
  is_active: boolean;

  @ApiProperty({ example: false, description: 'Karta asosiymi' })
  is_main: boolean;
}
