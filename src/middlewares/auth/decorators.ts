import { SetMetadata } from '@nestjs/common';
import { ApiHeaderOptions } from '@nestjs/swagger';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const AuthTokenHeaderApiHeader: ApiHeaderOptions = {
  name: 'Authorization',
  description: 'Token de autenticação',
  required: true,
  schema: { type: 'string' },
};
