import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAdressDto } from './dto/createCustomerAdress.dto';
import { CustomerAdress } from './models/customerAdress.model';
import { UpdateCustomerAdressDto } from './dto/updateCustomerAdressDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer Address')
@Controller('customer-address')
export class CustomerAddressController {
  constructor(private readonly customerAdressService: CustomerAddressService) {}

  //Create customerAdress
  @ApiOperation({ summary: 'Create customer adress' })
  @Post('create')
  async createCustomerAdress(
    @Body() createCustomerAdressDto: CreateCustomerAdressDto,
  ): Promise<CustomerAdress> {
    return this.customerAdressService.createCustomerAdress(
      createCustomerAdressDto,
    );
  }

  //Get all customerAdress
  @ApiOperation({ summary: 'Get all customer adress' })
  @Get('all')
  async getAllCustomerAdress(): Promise<CustomerAdress[]> {
    return this.customerAdressService.getAllCustomerAdresses();
  }

  //Get customerAdresses by id
  @ApiOperation({ summary: 'Get customer adress by id' })
  @Get(':id')
  async getCustomerAdressById(
    @Param('id') id: number,
  ): Promise<CustomerAdress> {
    return this.customerAdressService.getCustomerAdressById(id);
  }

  //Update customerAdress by id
  @ApiOperation({ summary: 'Update customer adress by id' })
  @Put(':id')
  async updateCustomerAdressById(
    @Param('id') id: number,
    @Body() updateCustomerAdressDto: UpdateCustomerAdressDto,
  ): Promise<CustomerAdress> {
    return this.customerAdressService.updateCustomerAdress(
      +id,
      updateCustomerAdressDto,
    );
  }

  //Delete customerAdress by id
  @ApiOperation({ summary: 'Delete customer adress by id' })
  @Delete(':id')
  async deleteCustomerAdressById(@Param('id') id: number): Promise<number> {
    return this.customerAdressService.deleteCustomerAdress(id);
  }
}
