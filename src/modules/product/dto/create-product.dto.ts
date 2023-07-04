import {
  IsNotEmpty,
  IsString,
  IsOptional,
  MaxLength,
  IsNumber,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsOptional()
  @MaxLength(300)
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  price: number;
}
