import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log(`server running on http://localhost:${process.env.PORT || 3000 }`)
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

}
bootstrap();
