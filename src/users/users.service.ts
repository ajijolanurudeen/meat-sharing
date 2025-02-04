import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User')private readonly userModel: Model<User>){}

async createUser(CreateUserDto:CreateUserDto):Promise<User> {
  const newUser = new this.userModel(CreateUserDto);
  return await newUser.save();
}

    async findAll(): Promise<User[]> {
      return await this.userModel.find();
    }
  
    async findOne(email: String):Promise<User> {
      return await this.userModel.findOne({email: email});
    }
  
  async update(email:String, updateUserDto: UpdateUserDto):Promise<User>{
      return await this.userModel.findByIdAndUpdate(email,UpdateUserDto,{new:true})
    }
  
    async remove(email: String):Promise<User> {
      return await this.userModel.findByIdAndDelete (email) 
    }
  }