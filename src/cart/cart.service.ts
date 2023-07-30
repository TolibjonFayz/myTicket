import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { CreateCartDto } from './dto/createCart.dto';
import { UpdateCartDto } from './dto/updateCart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private CartRepository: typeof Cart) {}

  //Create cart
  async createCart(createCartDto: CreateCartDto): Promise<Cart> {
    const cart = await this.CartRepository.create(createCartDto);
    return cart;
  }

  //Get all carts
  async getAllCarts() {
    const carts = await this.CartRepository.findAll();
    return carts;
  }

  //Get cart by id
  async getCartById(id: number) {
    const cart = await this.CartRepository.findOne({ where: { id } });
    return cart;
  }

  //Update cart by id
  async updateCart(id: number, updateCartDto: UpdateCartDto): Promise<Cart> {
    const cart = await this.CartRepository.update(updateCartDto, {
      where: { id },
      returning: true,
    });
    return cart[1][0].dataValues;
  }

  //Delete cart by id
  async deleteCart(id: number): Promise<number> {
    const cart = await this.CartRepository.destroy({ where: { id } });
    return cart;
  }
}
