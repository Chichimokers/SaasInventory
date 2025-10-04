import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { ProductEntity } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
 constructor(
     @InjectRepository(ProductEntity)
     private readonly productRepostory: Repository<ProductEntity>,
   ) {}
 

   async create(productData: Partial<ProductEntity>): Promise<ProductEntity> {
     const product = this.productRepostory.create(productData);
     return this.productRepostory.save(product);
   }

   async findAll(): Promise<ProductEntity[]> {
     return this.productRepostory.find();
   }
   async ReduceQuatity(id:string,quatity : number){
    let product :ProductEntity | null = await this.productRepostory.findOneBy({id})
    if(!product){
      throw new NotFoundException(`product with id ${id} not found`);
    }
    product.quantity = product.quantity= quatity;
    this.productRepostory.save(product)
    return product
   }
   async findOne(id: string): Promise<ProductEntity> {
     const product = await this.productRepostory.findOneBy({ id });
     if (!product) {
       throw new NotFoundException(`product with id ${id} not found`);
     }
     return product;
   }

   async update(id: string, updateData: Partial<ProductEntity>): Promise<ProductEntity> {
     const product = await this.findOne(id);
     Object.assign(product, updateData);
     return this.productRepostory.save(product);
   }
 
   
   async remove(id: string): Promise<void> {
     const result = await this.productRepostory.delete(id);
     if (result.affected === 0) {
       throw new NotFoundException(`product with id ${id} not found`);
     }
   }
}
