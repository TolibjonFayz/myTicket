import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventTypeDto {
  @ApiProperty({ example: 'Tohirjon', description: 'Event type nomi' })
  name: string;

  @ApiProperty({ example: 1, description: 'Event type idsi' })
  parent_event_type_id: number;
}
