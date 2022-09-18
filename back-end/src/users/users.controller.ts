import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';
import { CreateUserDto } from './create-user.dto';
import { User } from './users.schema';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseInterceptors(new SanitizeMongooseModelInterceptor())
@Controller('user')
@ApiTags('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/email/:email')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user by email' })
  async getUserByEmail(@Param('email') email: string): Promise<User> {
    return await this.userService.getUserByEmail(email);
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  async addUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }
}
