import { IsArray, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {
  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  productsId: number[];
}
