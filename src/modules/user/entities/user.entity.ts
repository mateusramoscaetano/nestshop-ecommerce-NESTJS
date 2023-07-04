import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';
export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: true })
  roles: Role;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
