import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/users.schema';
import { Exercise, ExerciseSchema } from './exercises.entity';

@Schema()
export class Workout extends Document {

  @Prop()
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: User;

  @Prop({
    type: [ExerciseSchema],
    ref: 'exercise',
  })
  exercises: Exercise[];
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
