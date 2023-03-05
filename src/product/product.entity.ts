export class ProductEntity{
    id: number
    publicId: string
    name: string
    value: number
    quantityAvaiable: number
    description: string
    characteristics: ProductCharactetistics[]
    image: string
    category: string
    createdAt: string
    updatedAt: string
      
}

class ProductCharactetistics {
    nameManufacturer: string
    descriptionManufacturer: string
}