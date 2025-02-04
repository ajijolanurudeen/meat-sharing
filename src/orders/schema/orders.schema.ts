import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Order extends Document {
  @Prop({ type: String, default: uuidv4 })
  orderId: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'MeatItem', required: true })
  meatItemId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  sharingOption: number;

  @Prop([{ type: Types.ObjectId, ref: 'User' }])
  participants: Types.ObjectId[];

  @Prop({ type: String, enum: ['pending', 'processing', 'completed'], default: 'pending' })
  status: string;

  @Prop({ type: [String], default: [] })
  updates: string[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
