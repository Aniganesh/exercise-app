import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/users/users.schema';
import { Exercise, ExerciseSchema } from './exercises.entity';

export type WorkoutDocument = Workout & Document;

function validateExerciseCount(val: any) {
  return val.length < 3;
}

const exerciseCountValidator = [validateExerciseCount, 'Exceeded limit'];

@Schema()
export class Workout {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: User;

  @Prop({
    type: [ExerciseSchema],
    ref: 'exercise',
    validate: exerciseCountValidator,
  })
  exercises: Exercise[];
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
