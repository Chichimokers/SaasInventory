import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/auth/decorators/roles.decorators";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Role } from "src/users/Roles/enum.roles";
import { ProductsService } from "../services/products.service";
import { ProductEntity } from "../entities/product.entity";

@Controller('products')
@UseGuards(AuthGuard("jwt"), RolesGuard) 
@Roles(Role.Admin) 
export class ProductController {
    constructor(private readonly ProductService: ProductsService) { }

    @Get()
    async findAll(): Promise<ProductEntity[]> {
        return this.ProductService.findAll();
    }

    @Post("reduce")
    async reduce(@Param('id') id: string,@Param('value') value: number): Promise<ProductEntity> {
        return this.ProductService.ReduceQuatity(id,value)
    }
    
    @Post()
    async addOne(@Body() product : ProductEntity): Promise<ProductEntity> {
        return this.ProductService.create(product)
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ProductEntity> {
        return this.ProductService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateData: Partial<ProductEntity>): Promise<ProductEntity> {
        return this.ProductService.update(id, updateData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.ProductService.remove(id);
    }
}
