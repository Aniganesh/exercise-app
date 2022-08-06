import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout, WorkoutDocument } from './entity/workouts.entity';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectModel('workout') private workoutModel: Model<WorkoutDocument>,
  ) {}

  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return await new this.workoutModel(createWorkoutDto).save();
  }

  async findAll(): Promise<any> {
    return await this.workoutModel.find({}).populate('user');
  }

  async addExercise(_id, exercise: CreateExerciseDto): Promise<Workout> {
    exercise._id = new mongoose.Types.ObjectId();
    return await this.workoutModel.findByIdAndUpdate(
      _id,
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

  async deleteExercise(workoutId: string, exerciseId: mongoose.Types.ObjectId) {
    return await this.workoutModel.findByIdAndUpdate(
      workoutId,
      {
        $pull: {
          exercises: {
            _id: exerciseId,
          },
        },
      },
      {
        new: true,
      },
    );
  }
}
