import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PaymentMethodService } from './payment_method.service';
import { CreatePayment_methodDto } from './dto/createPayment_method.dto';
import { Payment_method } from './models/payment_method.model';
import { UpdatePayment_methodDto } from './dto/updatePayment_Method.dto';

@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  //Create payment_method
  @ApiOperation({ summary: 'Create payment_method' })
  @Post('create')
  async createPaymentMethod(
    @Body() createPaymentMethodDto: CreatePayment_methodDto,
  ): Promise<Payment_method> {
    return this.paymentMethodService.createPayment_method(
      createPaymentMethodDto,
    );
  }

  //Get all payment_methods
  @ApiOperation({ summary: 'Get all payment_methods' })
  @Get('all')
  async getAllPayment_methods(): Promise<Payment_method[]> {
    return this.paymentMethodService.getAllPayment_methods();
  }

  //Get payment_method by id
  @ApiOperation({ summary: 'Get payment_method by id' })
  @Get(':id')
  async getLangById(@Param('id') id: number): Promise<Payment_method> {
    return this.paymentMethodService.getPayment_methodById(id);
  }

  //Update payment_method by id
  @ApiOperation({ summary: 'Update payment_method by id' })
  @Put(':id')
  async updatePayment_methodById(
    @Param('id') id: number,
    @Body() updatePayment_methodDto: UpdatePayment_methodDto,
  ): Promise<Payment_method> {
    return this.paymentMethodService.updatePayment_method(
      +id,
      updatePayment_methodDto,
    );
  }

  //Delete payment_method by id
  @ApiOperation({ summary: 'Delete payment_method by id' })
  @Delete(':id')
  async deletePayment_method(@Param('id') id: number): Promise<number> {
    return this.paymentMethodService.deletePaymet_method(+id);
  }
}
