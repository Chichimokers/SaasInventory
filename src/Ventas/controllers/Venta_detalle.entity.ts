  import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Venta } from './Venta.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity('venta_detalle')
export class VentaDetalle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Venta, venta => venta.detalles, { onDelete: 'CASCADE' })
  venta: Venta;

  @ManyToOne(() => ProductEntity)
  product: ProductEntity;

  @Column({ type: 'int' })
  quantity: number;  // cantidad vendida para este producto
}
