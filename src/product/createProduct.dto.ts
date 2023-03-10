import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, ValidateNested } from "class-validator";
import { CharacteristicsProductDTO } from "./characteristicsProduct.dto";

export class CreateProductDTO {

    @IsNotEmpty()
    name: string;

    @IsNumber()
    value: number;

    @IsOptional()
    @IsNumber()
    quantityAvaiable: number;
    
    @IsOptional()
    description: string;

    @ValidateNested({each: true})
    @IsArray()
    @Type(() => CharacteristicsProductDTO)
    characteristics: CharacteristicsProductDTO[];
    
    @IsOptional()
    image: string;

    @IsNotEmpty()
    category: string; 
    
    @IsNotEmpty()
    createdAt: string;
    
    @IsNotEmpty()
    updatedAt: string;
}