import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Venta } from "./controllers/Venta.entity";
import { VentaDetalle } from "./controllers/Venta_detalle.entity";


@Module({
    imports: [
   TypeOrmModule.forFeature([Venta,VentaDetalle])
    ],controllers:[],
    providers: [],
    exports: [], // Exporta el servicio para usarlo en otros módulos
  })
export class VentasModule {}
  