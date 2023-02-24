import { Injectable } from "@nestjs/common"
import { UserEntity } from "./user.entity"

@Injectable()
export class UserRepository {
    
    private users: UserEntity[] = []

    async save(user: UserEntity) {
        this.users.push(user)
        return user
    }

    async getAllUsers() {
        return this.users
    }

    async listUsers() {
        return this.users
    }

    async updateUser(id: number, updatedUser: Partial<UserEntity>) {

        console.log(`usuario: ${id}`)
        const userExistis = this.users.find(
            currentUser => currentUser.id === id
        )

        if(!userExistis) {
            throw new Error("user not found")
        }

        Object.entries(updatedUser).forEach(([key, value]) => {
            if(key === "id") {
                return
            }

            userExistis[key] = value
            return userExistis
        })
    }

    async hasEmail(email: string) {
        const hasUser = this.users.find(
            user => user.email === email
        )

        return hasUser !== undefined
    }
 }