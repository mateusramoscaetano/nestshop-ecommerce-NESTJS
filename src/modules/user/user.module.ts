import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { AuthModule } from 'src/middlewares/auth/auth.module';
import { AuthService } from 'src/middlewares/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService, JwtService],
  imports: [PrismaModule, AuthModule],
})
export class UserModule {}
