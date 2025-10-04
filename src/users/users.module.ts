import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { UserService } from "./services/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserController } from "./controller/user.controller";


@Module({
    imports: [
   TypeOrmModule.forFeature([User])
    ],controllers:[UserController],
    providers: [UserService],
    exports: [UserService], // Exporta el servicio para usarlo en otros módulos
  })
  export class UsersModule {}
  