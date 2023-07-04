import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { AuthGuard } from 'src/middlewares/auth/auth.guard';
import { Public } from 'src/middlewares/auth/decorators';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiHeader,
} from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';

@Controller('products')
@ApiTags('product')
@UseGuards(AuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiHeader({
    name: 'Authorization',
    description: 'Token de autenticação',
    required: true,
    schema: { type: 'string' },
  })
  @ApiCreatedResponse({ type: ProductEntity })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Public()
  @ApiOkResponse({ type: ProductEntity, isArray: true })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Public()
  @ApiOkResponse({ type: ProductEntity })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Token de autenticação',
    required: true,
    schema: { type: 'string' },
  })
  @ApiOkResponse({ type: ProductEntity })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Token de autenticação',
    required: true,
    schema: { type: 'string' },
  })
  @ApiOkResponse({ type: ProductEntity })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
