import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Delivery_method } from './model/delivery_method.model';
import { CreateDeliveryMethodDto } from './dto/createDelivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/updateDeliveryMethod.dto';

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(Delivery_method)
    private DeliveryMethodRepository: typeof Delivery_method,
  ) {}

  //Create delivery method
  async createDeliveryMethod(
    createDeliveryDto: CreateDeliveryMethodDto,
  ): Promise<Delivery_method> {
    const delivery_method = await this.DeliveryMethodRepository.create(
      createDeliveryDto,
    );
    return delivery_method;
  }

  //Get all delivery_method
  async getAllDeliveryMethods() {
    const delivery_methods = await this.DeliveryMethodRepository.findAll();
    return delivery_methods;
  }

  //Get delivery_method by id
  async getDeliveryMethodtById(id: number) {
    const delivery_method = await this.DeliveryMethodRepository.findOne({
      where: { id },
    });
    return delivery_method;
  }

  //Update delivery_method by id
  async updateDeliveryMethod(
    id: number,
    updateDeliveryMethodDto: UpdateDeliveryMethodDto,
  ): Promise<Delivery_method> {
    const delivery_method = await this.DeliveryMethodRepository.update(
      updateDeliveryMethodDto,
      {
        where: { id },
        returning: true,
      },
    );
    return delivery_method[1][0].dataValues;
  }

  //Delete delivery_method by id
  async deleteDelivery(id: number): Promise<number> {
    const delivery_method = await this.DeliveryMethodRepository.destroy({
      where: { id },
    });
    return delivery_method;
  }
}
