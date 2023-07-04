import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';
import { PrismaModule } from './database/prisma/prisma.module';
import { AuthModule } from './middlewares/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ProductModule,
    OrderModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  providers: [],
})
export class AppModule {}
