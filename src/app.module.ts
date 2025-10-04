import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import postgreconfig from './dbconfig';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/product.module';
import { VentasModule } from './Ventas/ventas.module';

@Module({

  imports: [
    TypeOrmModule.forRoot(postgreconfig),
    AuthModule,
    UsersModule,
    ProductModule,
    VentasModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
