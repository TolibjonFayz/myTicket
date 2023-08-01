import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty({ example: 1, description: 'Event id...' })
  event_id: number;

  @ApiProperty({ example: 1, description: 'Seat id...' })
  seat_id: number;

  @ApiProperty({ example: 2555, description: 'Chipte narxi...' })
  price: number;

  @ApiProperty({ example: 1000, description: 'Xizmat haqi...' })
  service_fee: number;

  @ApiProperty({ example: 2, description: 'Holat id...' })
  status: number;

  @ApiProperty({ example: 3, description: 'Chipta narxi...' })
  ticket_type: number;
}
