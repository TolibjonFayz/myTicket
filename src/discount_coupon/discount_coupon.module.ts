import { Module } from '@nestjs/common';
import { DiscountCouponController } from './discount_coupon.controller';
import { DiscountCouponService } from './discount_coupon.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discount_coupon } from './model/discount_couple.model';

@Module({
  imports: [SequelizeModule.forFeature([Discount_coupon])],
  controllers: [DiscountCouponController],
  providers: [DiscountCouponService],
  exports: [DiscountCouponService],
})
export class DiscountCouponModule {}
