import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/createCart.dto';
import { Cart } from './models/cart.model';
import { UpdateCartDto } from './dto/updateCart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  //Create cart
  @Post('create')
  async createCart(@Body() createCartdto: CreateCartDto): Promise<Cart> {
    return this.cartService.createCart(createCartdto);
  }

  //Get all carts
  @Get('all')
  async getAllCarts(): Promise<Cart[]> {
    return this.cartService.getAllCarts();
  }

  //Get cart by id
  @Get(':id')
  async getCartById(@Param('id') id: number): Promise<Cart> {
    return this.cartService.getCartById(id);
  }

  //Update cart by id
  @Put(':id')
  async updateCartById(
    @Param('id') id: number,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    return this.cartService.updateCart(+id, updateCartDto);
  }

  //Delete cart by id
  @Delete(':id')
  async deleteCustomerById(@Param('id') id: number): Promise<number> {
    return this.cartService.deleteCart(id);
  }
}
