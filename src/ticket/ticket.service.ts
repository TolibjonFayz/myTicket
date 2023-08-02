import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './models/ticket.model';
import { CreateTicketDto } from './dto/createTicket.dto';
import { UpdateTicketDto } from './dto/updateTicket.dto';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private TicketRepository: typeof Ticket) {}

  //Create ticket
  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = await this.TicketRepository.create(createTicketDto);
    return ticket;
  }

  //Get all tickets
  async getAllTickets() {
    const tickets = await this.TicketRepository.findAll({
      include: { all: true },
    });
    return tickets;
  }

  //Get ticket by id
  async getTicketById(id: number) {
    const ticket = await this.TicketRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return ticket;
  }

  //Update ticket by id
  async updateTicket(
    id: number,
    updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    const ticket = await this.TicketRepository.update(updateTicketDto, {
      where: { id },
      returning: true,
    });
    return ticket[1][0].dataValues;
  }

  //Delete ticket by id
  async deleteTicket(id: number): Promise<number> {
    const ticket = await this.TicketRepository.destroy({ where: { id } });
    return ticket;
  }
}
