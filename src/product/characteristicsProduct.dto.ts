import { IsString } from "class-validator";

export class CharacteristicsProductDTO {
    @IsString()
    nameManufacturer: string;

    @IsString()
    descriptionManufacturer: string
}