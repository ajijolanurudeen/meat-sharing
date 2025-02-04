import { Controller, Get, Post, Body, Patch, Param, Delete , HttpCode,HttpStatus,UseGuards,Request} from '@nestjs/common';
import { AuthGuard } from './authGuard';
import { AuthService } from './auth.service';
import { signInDto } from './dto/signInDto';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)

  // @Post('login')
  // async signIn(@Body() signInDto:signInDto) {
  //   return this.authService.signIn(signInDto.email,signInDto.password);
  // }

  @Post('login')
async signIn(@Body() signInDto: signInDto) {
  return this.authService.signIn(signInDto.email, signInDto.password);
}
  
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}