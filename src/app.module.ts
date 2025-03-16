import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MeatModule } from './meat/meat.module';
import { OrdersModule } from './orders/orders.module';
import { config } from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import  config from "./config/keys"
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,}
    ),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService)=> ({
        uri: ConfigService.get<string>('MONGO_URI'),
      })
    }),
     AuthModule,
      MeatModule,
       OrdersModule
      ],
  controllers: [AppController],
  providers: [AppService,UsersModule
  ],
})
export class AppModule {}
