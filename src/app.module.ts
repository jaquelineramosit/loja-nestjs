import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule, ProductModule]
})
export class AppModule {}
