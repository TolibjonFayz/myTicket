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
import { DiscountCouponService } from './discount_coupon.service';
import { CreateDiscount_couponDto } from './dto/createDiscount_coupon.dto';
import { Discount_coupon } from './model/discount_couple.model';
import { UpdateDiscount_couponDto } from './dto/updateDiscoun_coupon.dto';

@Controller('discount-coupon')
export class DiscountCouponController {
  constructor(private readonly DiscountCouponService: DiscountCouponService) {}

  //Create discount_coupon
  @ApiOperation({ summary: 'create discount_coupon' })
  @Post('create')
  async createDiscountCoupon(
    @Body() createDiscountCoupon: CreateDiscount_couponDto,
  ): Promise<Discount_coupon> {
    return this.DiscountCouponService.createDiscountCoupon(
      createDiscountCoupon,
    );
  }

  //Get all discount_coupon
  @ApiOperation({ summary: 'get all discount_coupons' })
  @Get('all')
  async getAllDiscountCoupons(): Promise<Discount_coupon[]> {
    return this.DiscountCouponService.getAllDiscountCoupons();
  }

  //Get discount_coupon by id
  @ApiOperation({ summary: 'get discount_coupon by id' })
  @Get(':id')
  async getDiscountCouponById(
    @Param('id') id: number,
  ): Promise<Discount_coupon> {
    return this.DiscountCouponService.getDiscountCouponById(id);
  }

  //Update discount_coupon by id
  @ApiOperation({ summary: 'update discount_coupon by id' })
  @Put(':id')
  async updateDiscountCoupon(
    @Param('id') id: number,
    @Body() updateDiscountCoupon: UpdateDiscount_couponDto,
  ): Promise<Discount_coupon> {
    return this.DiscountCouponService.updateDistrict(+id, updateDiscountCoupon);
  }

  //Delete discount_coupon by id
  @ApiOperation({ summary: 'delete discount_coupon by id' })
  @Delete(':id')
  async deleteDiscountCouponById(@Param('id') id: number): Promise<number> {
    return this.DiscountCouponService.deleteDiscountCoupon(id);
  }
}
