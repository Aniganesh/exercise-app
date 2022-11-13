import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User } from './users.schema';
import { hash } from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService)) private authService: AuthService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(user: CreateUserDto): Promise<any> {
    console.warn('create');
    if (user.password)
      user.password = await hash(user.password, process.env.SALT);
    const savedUser = await new this.userModel(user).save().catch(() => {
      throw new ConflictException('Email already exists');
    });
    return this.authService.login(savedUser);
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userModel
      .findOne({
        email,
      })
      .exec()
      .then((user) => {
        if (user === null) {
          throw new NotFoundException('user not found');
        }
        return user;
      });
  }
}
