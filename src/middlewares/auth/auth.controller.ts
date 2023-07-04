import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/modules/user/dtos/login-user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({
    description: 'Login successful',
    schema: {
      properties: {
        access_token: { type: 'string' },
        redirect: { type: 'string' },
      },
    },
  })
  signIn(@Body() signInDto: LoginUserDto) {
    return this.authService.signIn(signInDto);
  }
}
