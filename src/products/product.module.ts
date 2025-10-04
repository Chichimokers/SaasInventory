import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./entities/product.entity";
import { ProductsService } from "./services/products.service";
import { ProductController } from "./controller/product.controller";

@Module({
    imports: [
   TypeOrmModule.forFeature([ProductEntity])
    ],controllers:[ProductController],
    providers: [ProductsService],
    exports: [ProductsService], // Exporta el servicio para usarlo en otros módulos
  })
  export class ProductModule {}
  