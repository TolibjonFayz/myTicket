import { ApiProperty } from "@nestjs/swagger";

export class UpdateCartDto {
  @ApiProperty({ example: 1, description: 'Chipta id' })
  ticket_id: number;

  @ApiProperty({ example: 1, description: 'Fodalanuvchi id' })
  customer_id: number;

  @ApiProperty({ example: '31.07.2023', description: 'bosh sana' })
  createdAt: string;

  @ApiProperty({ example: '31.07.2023', description: 'tugat sana' })
  fineshedAt: string;

  @ApiProperty({ example: 1, description: 'id' })
  status_id: number;
}
