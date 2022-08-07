import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';
import { AuthService } from './auth.service';
import { JWTAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local.guard';

@UseInterceptors(new SanitizeMongooseModelInterceptor())
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JWTAuthGuard)
  @Get('profile')
  me(@Request() req) {
    return req.user;
    // Doesn't seem to make sense without knowledge of how passport works.
    // If you've  forgotten, refer: https://docs.nestjs.com/security/authentication#implement-protected-route-and-jwt-strategy-guards
  }
}
