import { ApiProperty } from "@nestjs/swagger";


export class UpdateExerciseDto {
  @ApiProperty({ description: 'Exercise ID' })
  _id: string;

  @ApiProperty({ description: 'Exercise name' })
  name: string;

  @ApiProperty({ description: 'Reps' })
  rep: number;

  @ApiProperty({ description: 'Duration' })
  duration: number;

  @ApiProperty({ description: 'sets' })
  sets: number;

  @ApiProperty({ description: 'interval' })
  interval: number;
}
