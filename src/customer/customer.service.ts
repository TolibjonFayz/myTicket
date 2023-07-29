import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private CustomerRepository: typeof Customer,
  ) {}

  //Create customer
  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.CustomerRepository.create(createCustomerDto);
    return customer;
  }

  //Get all customers
  async getAllCustomers() {
    const customers = await this.CustomerRepository.findAll();
    return customers;
  }

  //Get customer by id
  async getCustomerById(id: number) {
    const customer = await this.CustomerRepository.findOne({ where: { id } });
    return customer;
  }

  //Update customer by id
  async updateCustomer(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.CustomerRepository.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
    return customer[1][0].dataValues;
  }

  //Delete customer by id
  async deleteCustomer(id: number): Promise<number> {
    const customer = await this.CustomerRepository.destroy({ where: { id } });
    return customer;
  }
}
