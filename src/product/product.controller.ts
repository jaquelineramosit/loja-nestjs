import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";

@Controller()
export class ProductController {

    constructor(private productRepository: ProductRepository) {}

    @Post('/products')
    async createProdutct(@Body() dataProduct) {
        
        try {
            return await this.productRepository.save(dataProduct)
        } catch (error) {
            return error
        }
    }

    @Get('/products')
    async getAllUsers() {
        return this.productRepository.getAllProducts()
    }
}