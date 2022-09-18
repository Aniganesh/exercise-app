import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/users/users.schema';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Exercise } from './entity/exercises.entity';
import { Workout } from './entity/workouts.entity';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectModel(Workout.name) private workoutModel: Model<Workout>,
  ) {}

  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return await new this.workoutModel(createWorkoutDto).save();
  }

  async findAll(): Promise<any> {
    return await this.workoutModel.find({});
  }

  async addExercise(identifier: WorkoutIdentifier, exercise: CreateExerciseDto): Promise<Workout> {
    exercise._id = new mongoose.Types.ObjectId();
    return await this.workoutModel.findOneAndUpdate(
      identifier,
      {
        $push: {
          exercises: exercise,
        },
      },
      {
        new: true,
      },
    );
  }

  async getWorkoutById(workoutId: string): Promise<Workout> {
    return await this.workoutModel.findById(workoutId);
  }

  async deleteWorkout(workoutId: string): Promise<void> {
    return await this.workoutModel.findByIdAndDelete(workoutId);
  }

  async deleteExercise(workoutId: string, exerciseId: string) {
    return await this.workoutModel.findByIdAndUpdate(
      workoutId,
      {
        $pull: {
          exercises: {
            _id: new mongoose.Types.ObjectId(exerciseId),
          },
        },
      },
      {
        new: true,
      },
    );
  }

  async updateWorkout(workout: UpdateWorkoutDto): Promise<Workout> {
    return await this.workoutModel.findByIdAndUpdate(workout._id, workout, {
      new: true,
    });
  }

  async updateExercise(
    workoutId: string,
    exercise: UpdateExerciseDto,
  ): Promise<Exercise> {
    return await this.workoutModel.findByIdAndUpdate(
      workoutId,
      {
        $set: {
          exercises: exercise,
        },
      },
      { new: true },
    );
  }
}
