import { IsEmail,isString,IsPhoneNumber,IsDate, IsString, isEmail, isNumber, isDate, IsUUID, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;    // The user's username (required)
    
    @IsString()
     @IsNotEmpty()
    email: string;     // The user's email (required)
    
    @IsString()
     @IsNotEmpty()
    password: string;     // The user's password (required)
    
    @IsPhoneNumber('NG')
    phoneNumber: string;        
    
    @IsString()
     @IsNotEmpty()
    address: string; 
  
}
