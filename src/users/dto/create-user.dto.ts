import { IsEmail,isString,IsNumber,IsDate, IsString, isEmail, isNumber, isDate, IsUUID } from "class-validator";

export class CreateUserDto {
    @IsUUID()
    @IsString()
    UserId: String;

    @IsString()
    username: string;    // The user's username (required)
    
    @IsString()
    email: string;     // The user's email (required)
    
    @IsString()
    password: string;     // The user's password (required)
    
    @IsNumber()
    age?: number;         // The user's age (optional)
    
    @IsDate()
    createdAt?: Date;     // Timestamp of when the user was created (optional)
    
    @IsDate()
    updatedAt?: Date;     // Timestamp of when the user was last updated (optional)
}
