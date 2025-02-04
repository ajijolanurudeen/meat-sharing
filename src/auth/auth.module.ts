// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { UsersModule } from 'src/users/users.module';
// import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
// import { UsersService } from 'src/users/users.service';

// @Module({
//   imports:[UsersModule,  JwtModule.register({
//     global: true,
//     secret: jwtConstants.secret,
//     signOptions: { expiresIn: '1200s' },
//   }),],
//   controllers: [AuthController],
//   providers: [AuthService,UsersService],
// })
// export class AuthModule {}
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule, // Import UsersModule
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
