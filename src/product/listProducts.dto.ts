export class ListProductsDTO {

    constructor(
        readonly id: number,
        readonly name: string,
        readonly value: number,
        readonly quantityAvaiable: number,
        readonly characteristics: CharactetisticsProduct[],
        readonly image: string,
        readonly category: string

    ) {}

}

class CharactetisticsProduct {
    nameManufacturer: string
    descriptionManufacturer: string
}