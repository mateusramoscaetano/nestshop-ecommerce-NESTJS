import { Injectable, BadRequestException } from '@nestjs/common';
import { OrderDto } from './dtos/create-order.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UserProvider } from '../user/user.provider';
import { Order, PaymentStatus } from '@prisma/client';
import { GetUserDto } from '../user/dtos/get-user.dto';

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private userProvider: UserProvider,
  ) {}

  private get user(): GetUserDto {
    return this.userProvider.user;
  }

  async create(order: OrderDto) {
    const { productsId } = order;

    const productIdCounts = productsId.reduce((counts, productId) => {
      counts[productId] = (counts[productId] || 0) + 1;
      return counts;
    }, {});

    const products = await this.prisma.product.findMany({
      where: {
        id: {
          in: productsId,
        },
      },
    });

    let totalPrice = 0;
    const connectedProducts = products.map((product) => {
      const count = productIdCounts[product.id] || 1;
      totalPrice += product.price * count;
      return { id: product.id };
    });

    const createdOrder = await this.prisma.order.create({
      data: {
        userId: this.user.sub,
        products: {
          connect: connectedProducts,
        },
      },
    });

    return {
      order: createdOrder,
      totalPrice,
    };
  }

  async update(order: Order) {
    const orderUpdate = await this.prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: order.status,
      },
    });

    return orderUpdate;
  }

  async cancel(id: number) {
    const orders = this.prisma.order
      .update({ where: { id: id }, data: { status: PaymentStatus.CANCELLED } })
      .then(async () => {
        return this.prisma.order.findMany({
          where: {
            userId: this.user.sub,
          },
          include: {
            products: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
      })
      .catch((error) => {
        throw new BadRequestException(error);
      });

    return orders;
  }

  async clearAll() {
    await this.prisma.order.deleteMany({
      where: {
        userId: this.user.sub,
      },
    });
    return this.findAll();
  }

  async findAll() {
    const { sub } = this.userProvider.user;

    const orders = this.prisma.order.findMany({
      where: {
        userId: sub,
      },
      include: {
        products: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return orders;
  }

  async findOne(id: number) {
    const order = this.prisma.order.findUnique({
      where: {
        id: this.user.sub,
      },
    });

    return order;
  }
}
