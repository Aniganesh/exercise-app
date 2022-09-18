import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.grke7.mongodb.net/?retryWrites=true&w=majority`,
      {
        autoIndex: true,
      },
    ),
    AuthModule,
    UsersModule,
    WorkoutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
