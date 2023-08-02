import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Discount_coupon } from './model/discount_couple.model';
import { CreateDiscount_couponDto } from './dto/createDiscount_coupon.dto';
import { UpdateDiscount_couponDto } from './dto/updateDiscoun_coupon.dto';

@Injectable()
export class DiscountCouponService {
  constructor(
    @InjectModel(Discount_coupon)
    private DiscountCouponRepository: typeof Discount_coupon,
  ) {}

  //Create discount_coupon
  async createDiscountCoupon(
    createDiscountCouponDto: CreateDiscount_couponDto,
  ): Promise<Discount_coupon> {
    const discount_coupon = await this.DiscountCouponRepository.create(
      createDiscountCouponDto,
    );
    return discount_coupon;
  }

  //Get all discount_coupon
  async getAllDiscountCoupons() {
    const discount_coupons = await this.DiscountCouponRepository.findAll();
    return discount_coupons;
  }

  //Get discount_coupon by id
  async getDiscountCouponById(id: number) {
    const discount_coupon = await this.DiscountCouponRepository.findOne({
      where: { id },
    });
    return discount_coupon;
  }

  //Update discount_coupon by id
  async updateDistrict(
    id: number,
    updateDiscountCoupon: UpdateDiscount_couponDto,
  ): Promise<Discount_coupon> {
    const discount_coupon = await this.DiscountCouponRepository.update(
      updateDiscountCoupon,
      {
        where: { id },
        returning: true,
      },
    );
    return discount_coupon[1][0].dataValues;
  }

  //Delete discount_coupon by id
  async deleteDiscountCoupon(id: number): Promise<number> {
    const discount_coupon = await this.DiscountCouponRepository.destroy({
      where: { id },
    });
    return discount_coupon;
  }
}
