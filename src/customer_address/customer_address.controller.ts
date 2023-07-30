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

@Controller('customer-address')
export class CustomerAddressController {
  constructor(private readonly customerAdressService: CustomerAddressService) {}

  //Create customerAdress
  @Post('create')
  async createCustomerAdress(
    @Body() createCustomerAdressDto: CreateCustomerAdressDto,
  ): Promise<CustomerAdress> {
    return this.customerAdressService.createCustomerAdress(
      createCustomerAdressDto,
    );
  }

  //Get all customerAdress
  @Get('all')
  async getAllCustomerAdress(): Promise<CustomerAdress[]> {
    return this.customerAdressService.getAllCustomerAdresses();
  }

  //Get customerAdresses by id
  @Get(':id')
  async getCustomerAdressById(
    @Param('id') id: number,
  ): Promise<CustomerAdress> {
    return this.customerAdressService.getCustomerAdressById(id);
  }

  //Update customerAdress by id
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
  @Delete(':id')
  async deleteCustomerAdressById(@Param('id') id: number): Promise<number> {
    return this.customerAdressService.deleteCustomerAdress(id);
  }
}
