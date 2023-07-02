import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
