import { Controller, Post, Body, UnauthorizedException, ConflictException } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import LoginDto, { RegisterDto } from '../dto/login.dto';




@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    console.log(user)
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      return await this.authService.registerUser(registerDto.email, registerDto.password, registerDto.role);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new Error('Internal server error');
    }
  }
  
}
