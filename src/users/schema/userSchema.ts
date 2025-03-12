import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Schema()
export class User extends Document {
  @Prop({ type: String, default: uuidv4 })
  userId: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: Number, required: true, unique: true })  // Changed `Number` → `number`
  phoneNumber: number;

  @Prop({ type: String, required: true })  // Removed `unique: true` if not necessary
  address: string;

  @Prop({ type: String, required: true })
  password: string;

  // async comparePassword(candidatePassword: string): Promise<boolean> {
  //     return bcrypt.compare(candidatePassword, this.password);
  //   }
  }
  
  export const UserSchema = SchemaFactory.createForClass(User);
  
  UserSchema.pre<User>('save', async function (next) {
    if (!this.isModified('password')) return next(); // Hash only if modified
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
      return await bcrypt.compare(candidatePassword, this.password);
     };