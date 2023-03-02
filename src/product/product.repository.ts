import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { format} from 'date-fns'

@Injectable()
export class ProductRepository {

    private products: ProductEntity[] = []

    async save(product: ProductEntity) {

        console.log(product)

        product.createdAt = format(new Date(), 'MM/dd/yyyy')
        product.updatedAt = format(new Date(), 'MM/dd/yyyy')

        this.products.push(product)
        return product
    }

    async getAllProducts() {
        return this.products
    }

    async findProductBy(id: number) {
        const productExists = await this.products.find(
            productFound => productFound.id = id 
        )

        if(!productExists) {
            throw new Error("product not found")
        }

        return productExists
    }

    async updateProduct(id: number) {
        const productFound = await this.findProductBy(id)

        Object.entries(productFound).forEach(([key, value]) => {

            if(key === "id") {
                return
            }

            productFound[key] = value
            return productFound
        })
    }
}