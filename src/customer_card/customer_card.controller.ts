import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/createCustomerCardDto';
import { CustomerCard } from './models/customerCard.model';
import { UpdateCustomerCardDto } from './dto/updateCustomerCardDto';

@Controller('customer-card')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  //Create customerCard
  @Post('create')
  async createCustomer(
    @Body() createCustomerCarddto: CreateCustomerCardDto,
  ): Promise<CustomerCard> {
    return this.customerCardService.createCustomerCard(createCustomerCarddto);
  }

  //Get all customerCard
  @Get('all')
  async getAllCustomerCards(): Promise<CustomerCard[]> {
    return this.customerCardService.getAllCustomerCards();
  }

  //Get customerCard by id
  @Get(':id')
  async getCustomerCardById(@Param('id') id: number): Promise<CustomerCard> {
    return this.customerCardService.getCustomerCardById(id);
  }

  //Update customerCard by id
  @Put(':id')
  async updateCustomerById(
    @Param('id') id: number,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto,
  ): Promise<CustomerCard> {
    return this.customerCardService.updateCustomerCard(
      +id,
      updateCustomerCardDto,
    );
  }

  //Delete customerCard by id
  @Delete(':id')
  async deleteCustomerCardById(@Param('id') id: number): Promise<number> {
    return this.customerCardService.deleteCustomerCard(id);
  }
}
