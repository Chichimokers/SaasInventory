import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { AuthService } from "./services/auth.service";
import { UsersModule } from "src/users/users.module";
import { AuthController } from "./controller/auth.controller";

// auth.module.ts
@Module({
    imports: [
      JwtModule.register({
        secret: 'secretKey', // MISSING ENV
        signOptions: { expiresIn: '1h' },
      }),
      PassportModule,
      UsersModule
    ],controllers:[AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService], // Exporta el servicio para usarlo en otros módulos
  })
  export class AuthModule {}
  