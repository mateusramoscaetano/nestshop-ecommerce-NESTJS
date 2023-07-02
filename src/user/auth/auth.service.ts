import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { LoginUserDto } from '../dtos/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email: loginUserDto.email },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordValidate = await this.comparePassword(
      loginUserDto.password,
      user.password,
    );

    if (!passwordValidate) {
      throw new UnauthorizedException();
    }

    const acess_token = await this.jwtService.signAsync({ user });

    return acess_token;
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await hash(password, saltRounds);
  }

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const result = await compare(password, hashedPassword);
    return result;
  }
}
