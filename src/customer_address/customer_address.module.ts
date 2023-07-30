import { Module } from '@nestjs/common';
import { CustomerAddressController } from './customer_address.controller';
import { CustomerAddressService } from './customer_address.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerAdress } from './models/customerAdress.model';

@Module({
  imports: [SequelizeModule.forFeature([CustomerAdress])],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
  exports: [CustomerAddressService],
})
export class CustomerAddressModule {}
