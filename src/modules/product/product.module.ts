import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { AuthModule } from 'src/middlewares/auth/auth.module';
import { AuthService } from 'src/middlewares/auth/auth.service';
import { AuthGuard } from 'src/middlewares/auth/auth.guard';

@Module({
  controllers: [ProductController],
  providers: [ProductService, AuthService, AuthGuard],
  imports: [PrismaModule, AuthModule],
})
export class ProductModule {}
