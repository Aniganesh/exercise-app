import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: JwtStrategy.name,
    }),
    JwtModule.register({
      secretOrPrivateKey: process.env.SECRET,
    }),
    forwardRef(() => UsersModule),
  ],

  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
