import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MeatModule } from './meat/meat.module';
import { OrdersModule } from './orders/orders.module';
import config  from "./config/keys"

@Module({
  imports: [UsersModule,MongooseModule.forRoot(config.mongoURI), AuthModule, MeatModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService,UsersModule
  ],
})
export class AppModule {}
