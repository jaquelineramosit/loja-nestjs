import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './users/user.module';
import { UserRepository } from './users/user.repository';

@Module({
  imports: [UserModule, ProductModule]
})
export class AppModule {}
