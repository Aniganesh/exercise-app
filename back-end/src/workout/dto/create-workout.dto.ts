import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkoutDto {
  @ApiProperty({
    type: String,
    description: 'Workout name',
  })
  name: string;
  user?: string;
}
