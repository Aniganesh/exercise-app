import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, description: 'First name of the user' })
  firstName: string;

  @ApiProperty({ type: String, description: 'Lastname of the user' })
  lastName: string;

  @ApiProperty({ type: String, description: 'Email' })
  email: string;

  @ApiProperty({ type: String, description: 'Password' })
  password: string;
}
