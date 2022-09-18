import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type exerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop({ type: mongoose.Types.ObjectId, auto: true })
  _id: mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  rep?: number;

  @Prop()
  duration?: number;

  @Prop()
  set: number;

  @Prop()
  interval?: number;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
