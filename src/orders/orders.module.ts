import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order,OrderSchema} from './schema/orders.schema';
import { Meat, MeatSchema } from 'src/meat/schema/meatSchema';
import { User, UserSchema } from 'src/users/schema/userSchema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}]),
    MongooseModule.forFeature([{ name: 'meat', schema: MeatSchema }]),
      MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports:[OrdersService]
})
export class OrdersModule {}
