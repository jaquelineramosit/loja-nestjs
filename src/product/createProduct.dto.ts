import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsNumberString, IsString, ValidateNested } from "class-validator";
import { CharacteristicsProductDTO } from "./characteristicsProduct.dto";

export class CreateProductDTO {

    @IsNotEmpty()
    name: string;

    @IsNumber()
    value: number;

    @IsNumber()
    quantityAvaiable: number;
    
    @IsString()
    description: string;

    @ValidateNested({each: true})
    @IsArray()
    @Type(() => CharacteristicsProductDTO)
    characteristics: CharacteristicsProductDTO[];
    
    @IsString()
    image: string;

    @IsNotEmpty()
    category: string; 
    
    @IsNotEmpty()
    createdAt: string;
    
    @IsNotEmpty()
    updatedAt: string;
}