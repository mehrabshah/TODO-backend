import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task, TaskSchema } from './entities/task.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    
  ],
  controllers: [TaskController],
  providers: [TaskService],

})
export class TaskModule {}
