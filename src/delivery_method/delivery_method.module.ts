import { Module } from '@nestjs/common';
import { DeliveryMethodController } from './delivery_method.controller';
import { DeliveryMethodService } from './delivery_method.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Delivery_method } from './model/delivery_method.model';

@Module({
  imports: [SequelizeModule.forFeature([Delivery_method])],
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService],
  exports: [DeliveryMethodService],
})
export class DeliveryMethodModule {}
