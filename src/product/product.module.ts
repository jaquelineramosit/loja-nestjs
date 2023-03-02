import { Module } from "@nestjs/common";
import { IncrementId } from "src/utils/incrementId";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";

@Module({
    controllers: [ProductController],
    providers: [ProductRepository, IncrementId]
})
export class ProductModule {}