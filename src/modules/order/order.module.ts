import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { AuthGuard } from 'src/middlewares/auth/auth.guard';
import { AuthModule } from 'src/middlewares/auth/auth.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService, AuthGuard],
  imports: [PrismaModule, AuthModule],
})
export class OrderModule {}
