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

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  //Create event
  @Post('create')
  async createEvent(@Body() createTicketdto: CreateTicketDto): Promise<Ticket> {
    return this.ticketService.createTicket(createTicketdto);
  }

  //Get all ticket
  @Get('all')
  async getAllTicket(): Promise<Ticket[]> {
    return this.ticketService.getAllTickets();
  }

  //Get ticket by id
  @Get(':id')
  async getTicketById(@Param('id') id: number): Promise<Ticket> {
    return this.ticketService.getTicketById(id);
  }

  //Update ticket by id
  @Put(':id')
  async updateTicketById(
    @Param('id') id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    return this.ticketService.updateTicket(+id, updateTicketDto);
  }

  //Delete ticket by id
  @Delete(':id')
  async deleteTicketByID(@Param('id') id: number): Promise<number> {
    return this.ticketService.deleteTicket(+id);
  }
}
