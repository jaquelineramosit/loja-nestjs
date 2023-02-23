import { format } from 'date-fns'
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
    
    description: string;

    @ValidateNested()
    @IsArray()
    @Type(() => CharacteristicsProductDTO)
    characteristics: CharacteristicsProductDTO[];
    
    image: string;

    @IsNotEmpty()
    category: string;
    
    @IsNotEmpty()
    createdAt: string;
    
    @IsNotEmpty()
    updatedAt: string;
}