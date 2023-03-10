import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common/decorators";
import { CreateUserDTO } from "./createUser.dto";
import { UserEntity } from "./user.entity";
import { UserRepository } from "./user.repository";
import { IncrementId } from "../utils/incrementId"
import { v4 } from 'uuid'
import { ListUsersDTO } from "./listUsers.dto";
import { Param } from "@nestjs/common";
import { UpdateUserDTO } from "./updateUser.dto";

@Controller()
export class UserController {

    constructor(private userRepository: UserRepository, private incrementId: IncrementId) {}

    @Post('/user')
    async createUser(@Body() dataUser: CreateUserDTO) {
        
        try {
            const userEntity = new UserEntity()
            const id = await this.incrementId.currentId()

            userEntity.id = id
            userEntity.publicId = v4()
            userEntity.name = dataUser.name
            userEntity.email = dataUser.email
            userEntity.password = dataUser.password

            await this.userRepository.save(userEntity)  
            return {
                id: userEntity.publicId,
                message: 'user created successfully'
            }
            
        } catch (error) 
        {
            return error;
            
        } 
    } 

    @Get("/full-users")
    async getAllUsers() {
        return await this.userRepository.getUsers()
    }

    @Get("/users")
    async listUsers() {
        const users = await this.userRepository.getUsers()
        const usersListed = users.map(
            user => new ListUsersDTO(
                user.id,
                user.name
            )
        )
        return usersListed;
    }

    @Put("/user/:id")
    async updateUser(@Param('id') id: number, @Body() userUpdated: UpdateUserDTO ) {
       const returnUser = await this.userRepository.updateUser(id, userUpdated)

       return {
            user: returnUser,
            message: 'user updated successfully'
       }
        
    }

    @Delete("/user/:id")
    async deleteUser(@Param("id") id: number) {
        const deletedUser = await this.userRepository.deleteUser(id)

        return {
            user: deletedUser,
            message: 'user deleted successfully'
       }
    }

}