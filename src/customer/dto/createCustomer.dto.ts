import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Falonchi', description: 'Ismingiz...' })
  first_name: string;

  @ApiProperty({ example: 'Palonchiyev', description: 'Familiyangiz...' })
  last_name: string;

  @ApiProperty({ example: '+99891234567', description: 'Raqamingiz...' })
  phone: string;

  @ApiProperty({ example: 'passowrd', description: 'Parolingiz...' })
  hashed_password: string;

  @ApiProperty({
    example: 'palonchixon@gmail.comm',
    description: 'Emailingiz...',
  })
  email: string;

  @ApiProperty({ example: '04.09.2004', description: 'Tug`ilgan kuniz...' })
  birth_date: string;

  @ApiProperty({ example: 1, description: 'Genderingiz...' })
  gender: number;

  @ApiProperty({ example: 1, description: 'Nimadir...' })
  lang_id: number;

  @ApiProperty({ example: 'jldsnkfs', description: 'SMT...' })
  hashed_refresh_token: string;
}
