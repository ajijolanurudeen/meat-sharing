import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString,IsUUID,isEnum,isNumber, } from "class-validator";

export class CreateMeatDto {
    @IsUUID()
    @IsNotEmpty()
    meatId: String

    @IsEnum(['cow','goat'])
    type :'cow'|'goat';

    @IsNumber()
    fullPrice: Number

    sharingOptions: {
        people: Number;
        pricePerPerson: Number
    }[];

    @IsEnum(['available','unavailable'])
    status: 'available' | 'unavailable';

    currentParticipants: {userEmail: String; sharingOption: Number}[];
    
    @IsArray()
    @IsString()
    updates: String[];



}
