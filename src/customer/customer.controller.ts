import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { Customer } from './models/customer.model';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  //Create customer
  @ApiOperation({ summary: 'Create customer' })
  @Post('create')
  async createCustomer(
    @Body() createCustomerdto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.createCustomer(createCustomerdto);
  }

  //Get all customers
  @ApiOperation({ summary: 'Get all customers' })
  @Get('all')
  async getAllCustomers(): Promise<Customer[]> {
    return this.customerService.getAllCustomers();
  }

  //Get customer by id
  @ApiOperation({ summary: 'Get customer by id' })
  @Get(':id')
  async getCustomerById(@Param('id') id: number): Promise<Customer> {
    return this.customerService.getCustomerById(id);
  }

  //Update customer by id
  @ApiOperation({ summary: 'Update customer by id' })
  @Put(':id')
  async updateCustomerById(
    @Param('id') id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.updateCustomer(+id, updateCustomerDto);
  }

  //Delete customer by id
  @ApiOperation({ summary: 'Delete customer by id' })
  @Delete(':id')
  async deleteCustomerById(@Param('id') id: number): Promise<number> {
    return this.customerService.deleteCustomer(id);
  }
}
