import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../Roles/enum.roles";
import { Venta } from "src/Ventas/controllers/Venta.entity";

// user.entity.ts
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role; // Enum para roles (ej: Admin, User, etc.)
  
  @OneToMany(() => Venta, venta => venta.user)
  ventas: Venta[];
}
