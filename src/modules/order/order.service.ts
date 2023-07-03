import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create() {
    return 'ok';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
