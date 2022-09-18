import { ApiProperty } from '@nestjs/swagger';

export class UpdateWorkoutDto {
  @ApiProperty({ description: 'Workout id' })
  _id: string;

  @ApiProperty({ type: String, description: 'Workout name' })
  name?: string;
}
