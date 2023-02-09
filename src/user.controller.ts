import { Body, Controller, Post } from "@nestjs/common/decorators";
import { UserRepository } from "./user.repository";

@Controller('/users')
export class UserController {

    private userRepository = new UserRepository()
    @Post()
    async createUser(@Body() dataUser) {
        
        try {
            return await this.userRepository.save(dataUser)    
        } catch (error) 
        {
            return error;
            
        }
        
        return 
    } 
}