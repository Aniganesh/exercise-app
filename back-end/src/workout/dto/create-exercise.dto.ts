import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CreateExerciseDto {

  _id: mongoose.Types.ObjectId;

  @ApiProperty({ description: 'Workout name', type: String })
  name: string;

  @ApiPropertyOptional({ description: 'Rep count', type: Number })
  rep?: number;

  @ApiPropertyOptional({ description: 'Duration', type: Number })
  duration?: number;

  @ApiProperty({ description: 'Set count', type: Number })
  set: number;

  @ApiProperty({ description: 'Interval', type: Number })
  interval?: number;
}
