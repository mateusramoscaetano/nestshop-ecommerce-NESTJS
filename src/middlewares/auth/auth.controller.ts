import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/modules/user/dtos/login-user.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() loginBankDto: LoginUserDto) {
    return this.authService.signIn(loginBankDto);
  }
}
