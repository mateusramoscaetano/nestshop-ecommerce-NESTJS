import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthService } from 'src/middlewares/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}

  async createMaster(createUserDto: CreateUserDto) {
    const hashedPassword = await this.authService.hashPassword(
      createUserDto.password,
    );

    const masterRole = await this.prisma.role.findUnique({
      where: { name: 'master' },
    });

    await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
        roles: {
          connect: { id: masterRole.id },
        },
      },
    });

    return { ...createUserDto, password: '-' };
  }

  async createClient(createUserDto: CreateUserDto) {
    const hashedPassword = await this.authService.hashPassword(
      createUserDto.password,
    );

    const clientRole = await this.prisma.role.findUnique({
      where: { name: 'client' },
    });

    await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
        roles: {
          connect: { id: clientRole.id },
        },
      },
    });

    return { ...createUserDto, password: '-' };
  }
}
