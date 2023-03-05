export class ProductEntity{
    id: number
    publicId: string
    name: string
    value: number
    quantityAvaiable: number
    description: string
    characteristics: CharactetisticsProduct[]
    image: string
    category: string
    createdAt: string
    updatedAt: string
      
}

class CharactetisticsProduct {
    nameManufacturer: string
    descriptionManufacturer: string
}