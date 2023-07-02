import {
  IsNotEmpty,
  IsString,
  IsOptional,
  MaxLength,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @MaxLength(300)
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
