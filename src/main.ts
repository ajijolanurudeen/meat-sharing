import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose'

async function bootstrap() {
  dotenv.config();
  
  
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(process.env.PORT ||3000);
  console.log(`server running on http://localhost:${process.env.PORT || 3000 }`)

  
  app.enableCors();


}
bootstrap();
