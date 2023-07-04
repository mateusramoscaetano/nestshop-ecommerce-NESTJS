import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthGuard } from 'src/middlewares/auth/auth.guard';
import {
  ApiCreatedResponse,
  ApiHeader,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { GetUserDto } from './dtos/get-user.dto';
import { AuthTokenHeaderApiHeader } from 'src/middlewares/auth/decorators';

@Controller('users')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiHeader({
    name: 'Authorization',
    description: 'Token de autenticação',
    required: true,
    schema: { type: 'string' },
  })
  @ApiCreatedResponse({ type: UserEntity })
  @Post('master')
  createMaster(@Body() createUserDto: CreateUserDto) {
    return this.userService.createMaster(createUserDto);
  }
  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  createClient(@Body() createUserDto: CreateUserDto) {
    return this.userService.createClient(createUserDto);
  }

  @ApiOkResponse({ type: GetUserDto })
  @ApiHeader({
    name: 'Authorization',
    description: 'Token de autenticação',
    required: true,
    schema: { type: 'string' },
  })
  @Get('me')
  getProfile(@Request() request) {
    return request.user;
  }
}
