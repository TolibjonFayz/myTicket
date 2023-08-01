import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: 'Tolibjon...', description: 'Ismingiz...' })
  name: string;

  @ApiProperty({ example: 'tolibjonfayz', description: 'Loginingiz...' })
  login: string;

  @ApiProperty({ example: 'adldjasdjewkjwe', description: 'Parolingiz...' })
  hashed_password: string;

  @ApiProperty({ example: true, description: 'Faolmisiz ozi...' })
  is_active: boolean;

  @ApiProperty({
    example: false,
    description: 'KOrxonada roliz kattami ozi...',
  })
  is_creator: boolean;

  @ApiProperty({ example: 'oimasomicma', description: 'Tokeningiz...' })
  hashed_refresh_token: string;
}
