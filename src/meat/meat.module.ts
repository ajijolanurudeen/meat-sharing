import { Module } from '@nestjs/common';
import { MeatService } from './meat.service';
import { MeatController } from './meat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MeatSchema } from './schema/meatSchema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'meat', schema: MeatSchema}])
],
  controllers: [MeatController],
  providers: [MeatService],
  exports:[MeatService],
})
export class MeatModule {}
