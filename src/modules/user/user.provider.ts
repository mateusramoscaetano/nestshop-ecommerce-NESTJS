import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

import { GetUserDto } from './dtos/get-user.dto';

@Injectable({ scope: Scope.REQUEST })
export class UserProvider {
  constructor(@Inject(REQUEST) private readonly request) {}

  get user(): GetUserDto {
    return this.request.user;
  }
}
