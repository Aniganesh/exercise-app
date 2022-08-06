import mongoose from 'mongoose';

export class CreateExerciseDto {
  _id: mongoose.Types.ObjectId;
  name: string;
  count?: number;
  time?: number;
  rep: number;
  interval?: number;
}
