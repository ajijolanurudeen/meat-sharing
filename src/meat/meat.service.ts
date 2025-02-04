import { Injectable } from '@nestjs/common';
import { CreateMeatDto } from './dto/create-meat.dto';
import { UpdateMeatDto } from './dto/update-meat.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Meat } from './schema/meatSchema';
import { meat } from './interface/meat.interface';

@Injectable()
export class MeatService {
  constructor(@InjectModel('meat')private readonly meatModel:Model<meat>){}
 async create(createMeatDto: CreateMeatDto):Promise<meat> {
   const newMeat = new this.meatModel(createMeatDto);
   return await newMeat.save();
  }

  async findAll():Promise<Meat[]> {
    return await this.meatModel.find();
  }

  async findOne(id):Promise<meat> {
    return await this.meatModel.findById('id');
  }

  async update(id: number, updateMeatDto: UpdateMeatDto):Promise<meat> {
    return await this.meatModel.findByIdAndUpdate(id,updateMeatDto,{new: true}) 
  }

  async remove(id: number) {
    return await this.meatModel.findByIdAndDelete(id);
  }
}
