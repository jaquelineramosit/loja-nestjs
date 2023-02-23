import { Body, Controller, Get, Post } from "@nestjs/common/decorators";
import { CreateProductDTO } from "./createProduct.dto";
import { ProductRepository } from "./product.repository";

@Controller()
export class ProductController {

    constructor(private productRepository: ProductRepository) {
        console.log('teste')
    }
    
    @Post('/products')
    async createProduct(@Body() dataProduct: CreateProductDTO) {
        
        console.log('dataProduct')
        //console.log(dataProduct)
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