import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { PrismaModule } from './database/prisma/prisma.module';
import { AuthModule } from './user/auth/auth.module';

@Module({
  imports: [UserModule, ProductModule, OrderModule, PrismaModule, AuthModule],
  providers: [],
})
export class AppModule {}
