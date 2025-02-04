import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order,OrderSchema} from './schema/orders.schema';
import { OrderInterface } from './interfaces/order.interfaces';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Meat } from 'src/meat/schema/meatSchema';
import { User } from 'src/users/schema/userSchema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order')private readonly orderModel:Model<Order>,
             @InjectModel('User')private readonly userModel:Model<User>,
              @InjectModel('meat')private readonly meatModel:Model<Meat>
){}
  
  private eventEmitter : EventEmitter2

  async create(createOrderDto: CreateOrderDto):Promise<Order> {


    const newOrder = new this.orderModel(createOrderDto);

  
    return await newOrder.save();
  }

  async processOrder(orderId: String){
    const order = await this.orderModel.findById(orderId).populate('participants')
    if(!order){
      throw new Error('order mot found');
    }

    if(order.participants.length >= order.sharingOption){
      order.status = 'processing';
      order.updates.push('order is now processing');

      await order.save()
      // Simulate processing (e.g., killing, dividing, shipping)
      this.eventEmitter.emit('order.processing', order);
  
      setTimeout(async () => {
        order.status = 'completed';
        order.updates.push('Order completed');
        await order.save();
        this.eventEmitter.emit('order.completed', order);
      }, 5000); // Simulate time delay for completion
    } else {
      order.updates.push(`Waiting for ${order.sharingOption - order.participants.length} more participants`);
      await order.save();
    }
  
    return order;
  }
    

  async findAll():Promise<OrderInterface[]> {
    return await this.orderModel.find() };

 async findOne(orderId: string):Promise<OrderInterface> {
    return await this.orderModel.findById(orderId);
  }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

 async  remove(orderId: String) {
    return await this.orderModel.findByIdAndDelete(orderId);
  }
}
