import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { AuthModule } from 'src/middlewares/auth/auth.module';
import { AuthService } from 'src/middlewares/auth/auth.service';
import { AuthGuard } from 'src/middlewares/auth/auth.guard';
import { UserProvider } from '../user/user.provider';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    AuthService,
    AuthGuard,
    UserProvider,
  ],
  imports: [PrismaModule, AuthModule],
})
export class ProductModule {}
