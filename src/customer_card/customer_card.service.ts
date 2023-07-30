import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './models/customerCard.model';
import { CreateCustomerCardDto } from './dto/createCustomerCardDto';
import { UpdateCustomerCardDto } from './dto/updateCustomerCardDto';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard)
    private CustomerCardRepository: typeof CustomerCard,
  ) {}

  //Create customerCard
  async createCustomerCard(
    createCustomerCardDto: CreateCustomerCardDto,
  ): Promise<CustomerCard> {
    const customerCard = await this.CustomerCardRepository.create(
      createCustomerCardDto,
    );
    return customerCard;
  }

  //Get all customerCards
  async getAllCustomerCards() {
    const customerCards = await this.CustomerCardRepository.findAll();
    return customerCards;
  }

  //Get customerCards by id
  async getCustomerCardById(id: number) {
    const customerCards = await this.CustomerCardRepository.findOne({
      where: { id },
    });
    return customerCards;
  }

  //Update customerCards by id
  async updateCustomerCard(
    id: number,
    updateCustomerCardsDto: UpdateCustomerCardDto,
  ): Promise<CustomerCard> {
    const customerCards = await this.CustomerCardRepository.update(
      updateCustomerCardsDto,
      {
        where: { id },
        returning: true,
      },
    );
    return customerCards[1][0].dataValues;
  }

  //Delete customerCards by id
  async deleteCustomerCard(id: number): Promise<number> {
    const customerCard = await this.CustomerCardRepository.destroy({
      where: { id },
    });
    return customerCard;
  }
}
