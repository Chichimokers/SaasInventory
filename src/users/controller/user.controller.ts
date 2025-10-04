 // Decorador para roles
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Role } from '../Roles/enum.roles';
import { User } from '../entities/user.entity';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserService } from '../services/user.service';

@Controller('users')
@UseGuards(AuthGuard("jwt"), RolesGuard) // Protege todas las rutas con JWT y Roles
@Roles(Role.Admin) // Solo Admin pasa el RolesGuard
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }
  @Post()
  async addOne(@Body() User : User): Promise<User> {
    return this.userService.create(User)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: Partial<User>): Promise<User> {
    return this.userService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
