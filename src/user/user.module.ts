import { Module } from "@nestjs/common/decorators";
import { IncrementId } from "src/utils/incrementId";
import { UniqueEmailValidator } from "./uniqueEmail.validator";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";

@Module({
    controllers: [UserController],
    providers: [UserRepository, UniqueEmailValidator, IncrementId]
})
export class UserModule {

}