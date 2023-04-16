import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  Request,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';
import { AuthService } from './auth.service';
import { Login } from './entity/login.entity';
import { JWTAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local.guard';

@UseInterceptors(new SanitizeMongooseModelInterceptor())
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: Login })
  @ApiOperation({ summary: 'Login' })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JWTAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Current logged in user' })
  @ApiBearerAuth()
  me(@Request() req) {
    return req.user;
    // Doesn't seem to make sense without knowledge of how passport works.
    // If you've  forgotten, refer: https://docs.nestjs.com/security/authentication#implement-protected-route-and-jwt-strategy-guards
  }
}
