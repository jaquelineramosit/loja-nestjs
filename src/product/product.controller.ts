import { Body, Controller, Get, Post } from "@nestjs/common/decorators";
import { CreateProductDTO } from "./createProduct.dto";
import { ProductEntity } from "./product.entity";
import { ProductRepository } from "./product.repository";
import { IncrementId } from "../utils/incrementId"
import { v4 } from "uuid";
import { CharacteristicsProductDTO } from "./characteristicsProduct.dto";

@Controller()
export class ProductController {

    constructor(private productRepository: ProductRepository, private incrementId: IncrementId) {}
    
    @Post('/product')
    async createProduct(@Body() dataProduct: CreateProductDTO) {        
        try {

            const productEntity = new ProductEntity()
            const id = await this.incrementId.currentId()
            const charac = dataProduct.characteristics

        

            
            productEntity.id = id
            productEntity.publicId = v4()
            productEntity.name = dataProduct.name
            productEntity.value = dataProduct.value
            productEntity.quantityAvaiable = dataProduct.quantityAvaiable
            productEntity.description = dataProduct.description
            productEntity.characteristics = 

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