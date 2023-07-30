import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAdress } from './models/customerAdress.model';
import { CreateCustomerAdressDto } from './dto/createCustomerAdress.dto';
import { UpdateCustomerAdressDto } from './dto/updateCustomerAdressDto';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAdress)
    private CustomerAdressRepository: typeof CustomerAdress,
  ) {}

  //Create customerAdress
  async createCustomerAdress(
    createCustomerAdressDto: CreateCustomerAdressDto,
  ): Promise<CustomerAdress> {
    const customerAdress = await this.CustomerAdressRepository.create(
      createCustomerAdressDto,
    );
    return customerAdress;
  }

  //Get all customerAdresses
  async getAllCustomerAdresses() {
    const customerAdresses = await this.CustomerAdressRepository.findAll();
    return customerAdresses;
  }

  //Get customerAdresses by id
  async getCustomerAdressById(id: number) {
    const customerAdress = await this.CustomerAdressRepository.findOne({
      where: { id },
    });
    return customerAdress;
  }

  //Update customerAdress by id
  async updateCustomerAdress(
    id: number,
    updateCustomerAdressDto: UpdateCustomerAdressDto,
  ): Promise<CustomerAdress> {
    const customerAdress = await this.CustomerAdressRepository.update(
      updateCustomerAdressDto,
      {
        where: { id },
        returning: true,
      },
    );
    return customerAdress[1][0].dataValues;
  }

  //Delete customerAdress by id
  async deleteCustomerAdress(id: number): Promise<number> {
    const customerAdress = await this.CustomerAdressRepository.destroy({
      where: { id },
    });
    return customerAdress;
  }
}
