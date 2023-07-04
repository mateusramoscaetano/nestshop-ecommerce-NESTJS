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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { GetUserDto } from './dtos/get-user.dto';

@Controller('users')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: UserEntity })
  @Post('master')
  createMaster(@Body() createUserDto: CreateUserDto) {
    return this.userService.createMaster(createUserDto);
  }
  @Post()
  createClient(@Body() createUserDto: CreateUserDto) {
    return this.userService.createClient(createUserDto);
  }

  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: GetUserDto })
  @Get('me')
  getProfile(@Request() request) {
    return request.user;
  }
}
