// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/users/Roles/enum.roles';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
