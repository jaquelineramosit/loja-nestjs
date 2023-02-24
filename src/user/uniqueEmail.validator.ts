import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "./user.repository";

@Injectable()
@ValidatorConstraint({async: true})
export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const hasUserEmail = await this.userRepository.hasEmail(value)
        return !hasUserEmail
    }
}

export const UniqueEmail = (optionsValidation: ValidationOptions) => {
    return (object: Object, properties: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: properties,
            options: optionsValidation,
            constraints: [],
            validator: UniqueEmailValidator
        })
    }
}