import { Order, PaymentStatus, Product, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class OrderEntity implements Order {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  status: PaymentStatus;

  @ApiProperty()
  user: User;

  @ApiProperty()
  products: Product[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
