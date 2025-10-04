import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
;

// user.entity.ts
@Entity("Products")
export class ProductEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ unique: true })
  Name: string;

  @Column()
  price : Number
  
  @Column({nullable:false,type:"int"})
  quantity : Number

  @Column()
  description:string
}
