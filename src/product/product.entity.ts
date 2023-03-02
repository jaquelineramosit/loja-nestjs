export class ProductEntity{
    id: number
    publicId: string
    name: string
    value: number
    quantityAvaiable: number
    description: string
    characteristics: [
        nameManufacturer: string,
        descriptionManufacturer: string
    ]
    image: string
    category: string
    createdAt: string
    updatedAt: string
      
}