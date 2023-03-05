import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CharacteristicsProductDTO } from "./characteristicsProduct.dto";

export class UpdateProductDTO {
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    value: number;

    @IsNumber()
    @IsOptional()
    quantityAvaiable: number;
    
    @IsString()
    @IsOptional()
    description: string;

    @ValidateNested({each: true})
    @IsArray()
    @Type(() => CharacteristicsProductDTO)
    @IsOptional()
    characteristics: CharacteristicsProductDTO[];
    
    @IsOptional()
    image: string;

    @IsNotEmpty()
    @IsOptional()
    category: string; 
    
    @IsNotEmpty()
    @IsOptional()
    updatedAt: string;
}