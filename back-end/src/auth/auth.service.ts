import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.getUserByEmail(email);
    if (!user) return null;
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    return passwordIsValid ? user : null;
  }

  login(user: User): { access_token: string } {
    const payload = {
      email: user.email,
      sub: user._id,
    };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.SECRET,
        privateKey: process.env.SECRET,
      }),
    };
  }

  verify(accessToken: string) {
    const fixedAccessToken = accessToken.replace('Bearer ', '');
    const decoded = this.jwtService.verify(fixedAccessToken, {
      secret: process.env.SECRET,
    });
    console.log(JSON.stringify(decoded));
    const user = this.usersService.getUserByEmail(decoded.email);
    if (!user) throw new Error('User not found');
    return user;
  }
}
