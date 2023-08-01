import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'Falonchi', description: 'Ismingiz...' })
  name: string;

  @ApiProperty({ example: 'jdnafisb.png', description: 'Rasm of event...' })
  photo: string;

  @ApiProperty({ example: '01.08.2023', description: 'Bosh sanasi...' })
  start_date: string;

  @ApiProperty({ example: '08:00', description: 'Vaqti boshlanish...' })
  start_time: string;

  @ApiProperty({ example: '01.08.2023', description: 'Vaqti tugashi...' })
  finish_date: string;

  @ApiProperty({ example: '13:00', description: 'Tugash soniyasi...' })
  finish_time: string;

  @ApiProperty({ example: 'Uzoqqa yugurish', description: 'Ma`lumotlar...' })
  info: string;

  @ApiProperty({ example: 1, description: 'Qanaqa turdagi event bu...' })
  event_type_id: number;

  @ApiProperty({ example: 1, description: 'human categorysi...' })
  human_category_id: number;

  @ApiProperty({ example: 2, description: 'Venue idsi...' })
  venue_id: number;

  @ApiProperty({ example: 2, description: 'Lang idsi...' })
  lang_id: number;

  @ApiProperty({ example: '02.08.2023', description: 'Chiqish vaqti...' })
  release_date: string;
}
