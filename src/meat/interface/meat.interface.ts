import { IsArray, IsEnum, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class meat {

    @IsString()
    @IsUUID()
    meatId: String;

    @IsEnum(['cow','goat'])
    type :'cow'|'goat';

    @IsNumber()
    fullPrice: Number


    sharingOptions: {
        people: Number;
        pricePerPerson: Number
    }[];

    @IsEnum(['available','unavailable'])
    @IsOptional()
    status: 'available' | 'unavailable';


    currentParticipants: {userEmail: String; sharingOption: Number}[];

    @IsArray()
    @IsString()
    updates: String[];

}
