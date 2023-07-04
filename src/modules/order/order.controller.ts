import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dtos/create-order.dto';
import { AuthGuard } from 'src/middlewares/auth/auth.guard';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() orderDto: OrderDto) {
    return await this.orderService.create(orderDto);
  }

  @Get()
  async findAll() {
    return await this.orderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.orderService.findOne(id);
  }

  @Delete(':id')
  async cancelOrder(@Param('id', ParseIntPipe) id: number) {
    return await this.orderService.cancel(id);
  }

  @Delete('clear')
  async cancelAll() {
    return await this.orderService.clearAll();
  }
}
