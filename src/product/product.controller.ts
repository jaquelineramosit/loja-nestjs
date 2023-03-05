import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { CreateProductDTO } from "./createProduct.dto";
import { ProductEntity } from "./product.entity";
import { ProductRepository } from "./product.repository";
import { IncrementId } from "../utils/incrementId"
import { v4 } from "uuid";
import { CharacteristicsProductDTO } from "./characteristicsProduct.dto";
import { ListProductsDTO } from "./listProducts.dto";
import { UpdateProductDTO } from "./updateProduct.dto";

@Controller()
export class ProductController {

    constructor(private productRepository: ProductRepository, private incrementId: IncrementId) {}
    
    @Post('/product')
    async createProduct(@Body() dataProduct: CreateProductDTO) {        
        try {

            const productEntity = new ProductEntity()
            const id = await this.incrementId.currentId()
            productEntity.id = id
            productEntity.publicId = v4()
            productEntity.name = dataProduct.name
            productEntity.value = dataProduct.value
            productEntity.quantityAvaiable = dataProduct.quantityAvaiable
            productEntity.description = dataProduct.description
            productEntity.characteristics = dataProduct.characteristics
            productEntity.image = dataProduct.image
            productEntity.category = dataProduct.category
            productEntity.createdAt = dataProduct.createdAt
            productEntity.updatedAt = dataProduct.updatedAt

            return await this.productRepository.save(productEntity)
        } catch (error) {
            return error
        }
    }

    @Get('/full-products')
    async getAllUsers() {
        return this.productRepository.getAllProducts()
    }

    @Get('/products')
    async listProducts() {
        const products = await this.productRepository.getAllProducts()
        const productsListed = products.map(
            product => new ListProductsDTO(
                product.id,
                product.name,
                product.value,
                product.quantityAvaiable,
                product.characteristics,
                product.image,
                product.category
            )
        )
        return productsListed
    }

    @Put("/product/:id")
    async updateProduct(@Param("id") id: number, @Body() productUpdated: UpdateProductDTO) {
        try {                 
            const product = await this.productRepository.updateProduct(id, productUpdated)
            return {
            user: product,
            message: 'product updated successfully'
            }

        } catch (error) {
            return error
        }
    }
    
    @Delete("/product/:id")
    async deleteProduct(@Param("id") id: number) {
        try {
            const deletedProduct = await this.productRepository.deleteProduct(id)

            return {
                product: deletedProduct,
                message: 'user deleted successfully'
            }
        } catch (error) {
            return {"error": error.message}
        }
    }
}
