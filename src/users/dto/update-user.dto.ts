import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    username: string;     // The user's username (required)
    email: string;        // The user's email (required)
    password: string;     // The user's password (required)
    phoneNumber: number;         // The users phoneNumber (optional)
    address:string;
    createdAt?: Date;     // Timestamp of when the user was created (optional)
    updatedAt?: Date;     // Timestamp of when the user was last updated (optional)
}
