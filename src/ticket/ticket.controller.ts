import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/createTicket.dto';
import { Ticket } from './models/ticket.model';
import { UpdateTicketDto } from './dto/updateTicket.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  //Create event
  @ApiOperation({ summary: 'Create ticket' })
  @Post('create')
  async createEvent(@Body() createTicketdto: CreateTicketDto): Promise<Ticket> {
    return this.ticketService.createTicket(createTicketdto);
  }

  //Get all ticket
  @ApiOperation({ summary: 'Get all tickets' })
  @Get('all')
  async getAllTicket(): Promise<Ticket[]> {
    return this.ticketService.getAllTickets();
  }

  //Get ticket by id
  @ApiOperation({ summary: 'Get ticket by id' })
  @Get(':id')
  async getTicketById(@Param('id') id: number): Promise<Ticket> {
    return this.ticketService.getTicketById(id);
  }

  //Update ticket by id
  @ApiOperation({ summary: 'Update ticket by id' })
  @Put(':id')
  async updateTicketById(
    @Param('id') id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    return this.ticketService.updateTicket(+id, updateTicketDto);
  }

  //Delete ticket by id
  @ApiOperation({ summary: 'Delete ticket by id' })
  @Delete(':id')
  async deleteTicketByID(@Param('id') id: number): Promise<number> {
    return this.ticketService.deleteTicket(+id);
  }
}
