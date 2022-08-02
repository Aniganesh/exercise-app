import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User> {
    return await this.userService.getUserByEmail(email, false);
  }

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }
}
