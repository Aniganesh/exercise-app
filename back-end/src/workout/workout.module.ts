import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { Workout, WorkoutSchema } from './entity/workouts.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Exercise, ExerciseSchema } from './entity/exercises.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Workout.name, schema: WorkoutSchema },
      { name: Exercise.name, schema: ExerciseSchema },
    ]),
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService],
  exports: [WorkoutService],
})
export class WorkoutModule {}
