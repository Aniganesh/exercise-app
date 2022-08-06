import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import mongoose from 'mongoose';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './entity/workouts.entity';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutService.createWorkout(createWorkoutDto);
  }

  @Get() // NOTE: For test purpose. Should be removed.
  async findAll(): Promise<any> {
    return await this.workoutService.findAll();
  }

  @Post('/exercise/:id')
  async addExercise(
    @Param('id') workoutId,
    @Body() createExerciseDto: CreateExerciseDto,
  ) {
    return await this.workoutService.addExercise(workoutId, createExerciseDto);
  }

  @Get('/:id')
  async getWorkoutById(@Param('id') workoutId: string): Promise<Workout> {
    return await this.workoutService.getWorkoutById(workoutId);
  }

  @Delete('/:workoutId/:exerciseId')
  async deleteExercise(
    @Param('workoutId') workoutId: string,
    @Param('exerciseId') exerciseId: string,
  ) {
    return await this.workoutService.deleteExercise(
      workoutId,
      new mongoose.Types.ObjectId(exerciseId),
    );
  }
}
