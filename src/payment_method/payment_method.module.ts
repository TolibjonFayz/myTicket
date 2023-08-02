import { Module } from '@nestjs/common';
import { PaymentMethodController } from './payment_method.controller';
import { PaymentMethodService } from './payment_method.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment_method } from './models/payment_method.model';

@Module({
  imports: [SequelizeModule.forFeature([Payment_method])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
  exports: [PaymentMethodService],
})
export class PaymentMethodModule {}
