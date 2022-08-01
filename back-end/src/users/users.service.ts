import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async create(user: CreateUserDto): Promise<any> {
    return await new this.userModel(user)
      .save()
      .then((user) => {
        user = user.toObject();
        delete user.password;
        return user;
      })
      .catch(() => {
        throw new ConflictException('email already exists');
      });
  }

  async getUserByEmail(
    email: string,
    passwordRequired: boolean,
  ): Promise<User> {
    return await this.userModel
      .findOne({
        email,
      })
      .select(passwordRequired ? '+password' : '')
      .exec()
      .then((user) => {
        if (user == null) {
          throw new NotFoundException('user not found');
        }
        return user;
      });
  }
}
