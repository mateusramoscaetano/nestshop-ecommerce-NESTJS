import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty()
  sub: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}
