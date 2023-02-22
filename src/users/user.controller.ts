import { Body, Controller, Get, Post } from "@nestjs/common/decorators";
import { UserRepository } from "./user.repository";

@Controller()
export class UserController {

    constructor(private userRepository: UserRepository) {

    }
    //private userRepository = new UserRepository()
    
    
    @Post('/users')
    async createUser(@Body() dataUser) {
        console.log(dataUser)
        try {
            return await this.userRepository.save(dataUser)    
        } catch (error) 
        {
            return error;
            
        } 
    } 
    @Get("/users")
    async getAllUsers() {
        
        return this.userRepository.getAllUsers()
    }
}