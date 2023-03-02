import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { UniqueEmail } from "./uniqueEmail.validator";

export class CreateUserDTO {

    @IsNotEmpty({message: "'name' value, doesn't be empty"})
    name: string;

    @IsEmail(undefined, {message: "'email' value, isn't valid email"})
    @UniqueEmail({message: "'email' already exists"})
    email: string;

    @MinLength(6, {message: "'password' value, must be at the least 6 characters"})
    @MaxLength(20, {message: "'password' value,  mustn't be more than 20 characters"})
    password: string;

    @IsString()
    adress: string
}