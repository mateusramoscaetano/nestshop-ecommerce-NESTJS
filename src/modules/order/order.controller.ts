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
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiHeader,
} from '@nestjs/swagger';
import { OrderEntity } from './entities/order.entity';

@Controller('orders')
@ApiTags('orders')
@UseGuards(AuthGuard)
@ApiHeader({
  name: 'Authorization',
  description: 'Token de autenticação',
  required: true,
  schema: { type: 'string' },
})
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiCreatedResponse({ type: OrderEntity })
  async createOrder(@Body() orderDto: OrderDto) {
    return await this.orderService.create(orderDto);
  }

  //this is a test

  @Get()
  @ApiOkResponse({ type: OrderEntity, isArray: true })
  async findAll() {
    return await this.orderService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: OrderEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.orderService.findOne(id);
  }

  @Delete(':id')
  @ApiOkResponse({ type: OrderEntity })
  async cancelOrder(@Param('id', ParseIntPipe) id: number) {
    return await this.orderService.cancel(id);
  }

  @Delete('clear')
  @ApiOkResponse({ type: OrderEntity })
  async cancelAll() {
    return await this.orderService.clearAll();
  }
}
