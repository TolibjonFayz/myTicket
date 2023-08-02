import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeliveryMethodService } from './delivery_method.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateDeliveryMethodDto } from './dto/createDelivery_method.dto';
import { Delivery_method } from './model/delivery_method.model';
import { UpdateDeliveryMethodDto } from './dto/updateDeliveryMethod.dto';

@Controller('delivery-method')
export class DeliveryMethodController {
  constructor(private readonly DeliveryMethodService: DeliveryMethodService) {}

  //Create delivery_method
  @ApiOperation({ summary: 'create delivery_method' })
  @Post('create')
  async createDeliveryMethod(
    @Body() createDieliveryMethoddto: CreateDeliveryMethodDto,
  ): Promise<Delivery_method> {
    return this.DeliveryMethodService.createDeliveryMethod(
      createDieliveryMethoddto,
    );
  }

  //Get all delivery_method
  @ApiOperation({ summary: 'get all delivery methods' })
  @Get('all')
  async getAllDeliveryMethods(): Promise<Delivery_method[]> {
    return this.DeliveryMethodService.getAllDeliveryMethods();
  }

  //Get delivery_method by id
  @ApiOperation({ summary: 'get delivery_method by id' })
  @Get(':id')
  async getDistrcitById(@Param('id') id: number): Promise<Delivery_method> {
    return this.DeliveryMethodService.getDeliveryMethodtById(id);
  }

  //Update delivery_method by id
  @ApiOperation({ summary: 'update delivery_method by id' })
  @Put(':id')
  async updateDeliveryMethodById(
    @Param('id') id: number,
    @Body() updateDeliveryMethoddto: UpdateDeliveryMethodDto,
  ): Promise<Delivery_method> {
    return this.DeliveryMethodService.updateDeliveryMethod(
      +id,
      updateDeliveryMethoddto,
    );
  }

  //Delete delivery_method by id
  @ApiOperation({ summary: 'delete delivery_method by id' })
  @Delete(':id')
  async deleteDeliveryMethodById(@Param('id') id: number): Promise<number> {
    return this.DeliveryMethodService.deleteDelivery(id);
  }
}
