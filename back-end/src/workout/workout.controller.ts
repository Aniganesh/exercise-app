import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Exercise } from './entity/exercises.entity';
import { Workout } from './entity/workouts.entity';
import { WorkoutService } from './workout.service';

@Controller('workout')
@ApiTags('workout')
@ApiBearerAuth()
@UseGuards(JWTAuthGuard)
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  @ApiOperation({ summary: 'Create workout' })
  async create(@Req() req, @Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    createWorkoutDto.user = req.user._id;
    return this.workoutService.createWorkout(createWorkoutDto);
    // return null;
  }

  @Get() // NOTE: For test purpose. Should be removed.
  @ApiOperation({ summary: 'Get all workouts', tags: ['all'] })
  async findAll(@Req() req): Promise<any> {
    return await this.workoutService.findAll();
  }

  @Post('/exercise/:id')
  @ApiOperation({ summary: 'Add exercise to workout' })
  @ApiParam({ name: 'id', type: String })
  async addExercise(
    @Req() req,
    @Param('id') workoutId: string,
    @Body() createExerciseDto: CreateExerciseDto,
  ) {
    const workoutIdentifier: WorkoutIdentifier = {
      _id: workoutId,
      user: req.user._id
    }
    return await this.workoutService.addExercise(workoutIdentifier, createExerciseDto);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get workout by id' })
  async getWorkoutById(@Param('id') workoutId: string): Promise<Workout> {
    return await this.workoutService.getWorkoutById(workoutId);
  }

  @Delete('/:workoutId/:exerciseId')
  @ApiOperation({ summary: 'Delete exercise' })
  async deleteExercise(
    @Param('workoutId') workoutId: string,
    @Param('exerciseId') exerciseId: string,
  ) {
    return await this.workoutService.deleteExercise(
      workoutId,
      exerciseId,
    );
  }

  @Put()
  @ApiOperation({ summary: 'Update Workout' })
  async updateWorkout(@Body() workout: UpdateWorkoutDto): Promise<Workout> {
    return await this.workoutService.updateWorkout(workout);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update Exercise' })
  async updateExercise(
    @Param('id') workoutId: string,
    @Body() exercise: UpdateExerciseDto,
  ): Promise<Exercise> {
    return await this.workoutService.updateExercise(workoutId, exercise);
  }
}
