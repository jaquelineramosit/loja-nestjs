import { Injectable } from "@nestjs/common"

@Injectable()
export class IncrementId {

    private id: number = 0
    
    async currentId() {
        const currentId = this.id === 0 ? 1 : this.id + 1

        this.id = currentId
        return currentId
    }
}

