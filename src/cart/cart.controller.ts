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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  //Create cart
  @ApiOperation({ summary: 'create cart' })
  @Post('create')
  async createCart(@Body() createCartdto: CreateCartDto): Promise<Cart> {
    return this.cartService.createCart(createCartdto);
  }

  //Get all carts
  @ApiOperation({ summary: 'get all cart' })
  @Get('all')
  async getAllCarts(): Promise<Cart[]> {
    return this.cartService.getAllCarts();
  }

  //Get cart by id
  @ApiOperation({ summary: 'get cart by id' })
  @Get(':id')
  async getCartById(@Param('id') id: number): Promise<Cart> {
    return this.cartService.getCartById(id);
  }

  //Update cart by id
  @ApiOperation({ summary: 'update cart by id' })
  @Put(':id')
  async updateCartById(
    @Param('id') id: number,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    return this.cartService.updateCart(+id, updateCartDto);
  }

  //Delete cart by id
  @ApiOperation({ summary: 'delete cart by id' })
  @Delete(':id')
  async deleteCustomerById(@Param('id') id: number): Promise<number> {
    return this.cartService.deleteCart(id);
  }
}
