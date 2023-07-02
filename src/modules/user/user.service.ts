import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthService } from 'src/middlewares/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.authService.hashPassword(
      createUserDto.password,
    );

    await this.prisma.user.create({
      data: { ...createUserDto, password: hashedPassword },
    });

    return [{ ...createUserDto, password: '-' }];
  }
}
