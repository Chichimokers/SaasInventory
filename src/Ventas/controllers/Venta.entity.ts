import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { VentaDetalle } from './Venta_detalle.entity';
import { User } from 'src/users/entities/user.entity';


@Entity('venta')
export class Venta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.ventas)
  user: User;  // usuario que hizo la venta

  @OneToMany(() => VentaDetalle, detalle => detalle.venta, { cascade: true, eager: true })
  detalles: VentaDetalle[];  // productos vendidos con cantidades

  @CreateDateColumn()
  createdAt: Date;  // fecha venta
}
