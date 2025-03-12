import { Injectable, UnauthorizedException } from '@nestjs/common';
import { signInDto } from './dto/signInDto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
@Injectable()
  export class AuthService{
    constructor(private usersService:UsersService,
                private jwtService:JwtService
    ){}
  
  async signIn(email:string ,candidatePassword:string):Promise<any>{
    const user = await this.usersService.findOne(email)
      if(!user){
        throw new UnauthorizedException('invalid email or password')
      }
      const isMatch = await bcrypt.compare(candidatePassword, user.password)
      if (!isMatch){
        throw new UnauthorizedException('invalid email or password')
      }
      const payload = {  username: user.email };
      
      return { access_token: await this.jwtService.signAsync(payload),
      
      }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
