import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Payment_method } from './models/payment_method.model';
import { CreatePayment_methodDto } from './dto/createPayment_method.dto';
import { UpdatePayment_methodDto } from './dto/updatePayment_Method.dto';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(Payment_method)
    private Payment_methodRepository: typeof Payment_method,
  ) {}

  //Create payment_method
  async createPayment_method(
    createPayment_methodDto: CreatePayment_methodDto,
  ): Promise<Payment_method> {
    const payment_method = await this.Payment_methodRepository.create(
      createPayment_methodDto,
    );
    return payment_method;
  }

  //Get all payment_methods
  async getAllPayment_methods() {
    const payment_methods = await this.Payment_methodRepository.findAll();
    return payment_methods;
  }

  //Get payment_method by id
  async getPayment_methodById(id: number) {
    const payment_method = await this.Payment_methodRepository.findOne({
      where: { id },
    });
    return payment_method;
  }

  //Update payment_method by id
  async updatePayment_method(
    id: number,
    updatePayment_methodDto: UpdatePayment_methodDto,
  ): Promise<Payment_method> {
    const payment_method = await this.Payment_methodRepository.update(
      updatePayment_methodDto,
      {
        where: { id },
        returning: true,
      },
    );
    return payment_method[1][0].dataValues;
  }

  //Delete payment_method by id
  async deletePaymet_method(id: number): Promise<number> {
    const payment_method = await this.Payment_methodRepository.destroy({
      where: { id },
    });
    return payment_method;
  }
}
