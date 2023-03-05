import { Injectable } from "@nestjs/common"
import { UserEntity } from "./user.entity"

@Injectable()
export class UserRepository {
    
    private users: UserEntity[] = []

    async save(user: UserEntity) {
        this.users.push(user)
        return user
    }

    async getUsers() {
        return this.users
    }

    private findUserById(id: number) {
        const userExistis = this.users.find(
            currentUser => currentUser.id === id
        )
    
        if(!userExistis) {
            throw new Error("user not found")
        }

        return userExistis
    }
    

    async updateUser(id: number, updatedUser: Partial<UserEntity>) {

        const userExistis = this.findUserById(id)
        

        Object.entries(updatedUser).forEach(([key, value]) => {
            if(key === "id") {
                return
            }

            userExistis[key] = value
            return userExistis
        })
    }

    async deleteUser(id: number ) {

        const userDeleted = this.findUserById(id)
        this.users = this.users.filter(
            newUsers => newUsers.id !== id
        )
        
        return userDeleted
    }

    async hasEmail(email: string) {
        const hasUser = this.users.find(
            user => user.email === email
        )

        return hasUser !== undefined
    }
 }