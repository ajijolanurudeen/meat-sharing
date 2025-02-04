import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UserSchema } from './schema/userSchema';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers:[UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export the service for use in other modules
})
export class UsersModule {}
