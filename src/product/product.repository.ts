import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { format} from 'date-fns'

@Injectable()
export class ProductRepository {

    private products: ProductEntity[] = []

    async save(product: ProductEntity) {

        product.createdAt = format(new Date(), 'MM/dd/yyyy')
        product.updatedAt = format(new Date(), 'MM/dd/yyyy')

        this.products.push(product)
        return product
    }

    async getAllProducts() {
        return this.products
    }

    async findProductBy(id: number) {
        const productExists = this.products.find(
            productFound => productFound.id === id 
        )

        console.log("productExists")
        console.log(productExists)

        if(!productExists) {
            throw new Error("product not found")
        }

        return productExists
    }

    async updateProduct(id: number, updatedProduct: Partial<ProductEntity>) {
        const productFound = await this.findProductBy(id)
        updatedProduct.updatedAt = format(new Date(), 'MM/dd/yyyy')
        Object.entries(updatedProduct).forEach(([key, value]) => {

            if(key === "id") {
                return
            }

            productFound[key] = value
            return productFound
        })
    }

    async deleteProduct(id: number ) {
        console.log("id: ")
        console.log(id)
        const productDeleted = this.findProductBy(id)
        console.log("productDeleted: ")
        console.log(productDeleted)


        this.products = this.products.filter(
            newProduct => newProduct.id !== id
        )
        
        return productDeleted     
    }
}
