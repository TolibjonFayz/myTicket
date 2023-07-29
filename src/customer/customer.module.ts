import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
