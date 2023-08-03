import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginAdminDto {
  @ApiProperty({ example: 'tolibjonfayz', description: 'Laqabingiz...' })
  @IsNotEmpty()
  login: string;

  @ApiProperty({ example: 'password', description: 'Parol...' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
