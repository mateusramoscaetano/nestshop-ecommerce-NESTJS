import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UserProvider } from '../user/user.provider';
import { GetUserDto } from '../user/dtos/get-user.dto';

@Injectable()
export class ProductService {
  constructor(
    private prismaService: PrismaService,
    private userProvider: UserProvider,
  ) {}

  private get user(): GetUserDto {
    return this.userProvider.user;
  }

  async create(createProductDto: CreateProductDto) {
    const user = await this.prismaService.user.findUnique({
      where: { id: this.user.sub },
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
      },
    });

    const hasCreateProductPermission = user.roles.some((role) =>
      role.permissions.some(
        (permission) => permission.action === 'create-product',
      ),
    );

    if (!hasCreateProductPermission) {
      throw new UnauthorizedException(
        'User does not have the "create-product" permission',
      );
    }

    const product = await this.prismaService.product.create({
      data: createProductDto,
    });

    return product;
  }

  async findAll() {
    return await this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const user = await this.prismaService.user.findUnique({
      where: { id: this.user.sub },
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
      },
    });

    const hasCreateProductPermission = user.roles.some((role) =>
      role.permissions.some(
        (permission) => permission.action === 'update-product',
      ),
    );

    if (!hasCreateProductPermission) {
      throw new UnauthorizedException(
        'User does not have the "update-product" permission',
      );
    }

    return await this.prismaService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async delete(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: this.user.sub },
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
      },
    });

    const hasCreateProductPermission = user.roles.some((role) =>
      role.permissions.some(
        (permission) => permission.action === 'delete-product',
      ),
    );

    if (!hasCreateProductPermission) {
      throw new UnauthorizedException(
        'User does not have the "delete-product" permission',
      );
    }

    return await this.prismaService.product.delete({ where: { id } });
  }
}
