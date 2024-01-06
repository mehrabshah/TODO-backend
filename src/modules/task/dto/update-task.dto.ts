import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    status: string;
  
    @IsDate()
    date: Date;


}
