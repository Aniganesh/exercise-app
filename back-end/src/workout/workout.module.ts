import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { WorkoutSchema } from './entity/workouts.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseSchema } from './entity/exercises.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'workout', schema: WorkoutSchema },
      { name: 'exercise', schema: ExerciseSchema },
    ]),
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService],
  exports: [WorkoutService],
})
export class WorkoutModule {}
