import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsDate()
  date: Date;
}
