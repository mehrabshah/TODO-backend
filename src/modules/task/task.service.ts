import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
import *  as mongoose from 'mongoose';
@Injectable()
export class TaskService {

   constructor(
     @InjectModel(Task.name)
     private taskModel:mongoose.Model<Task>
   ){}


  create(createTaskDto: CreateTaskDto) {
    const createdTask=new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  findAll() {
     const tasks=this.taskModel.find()
     return tasks;
  }
  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
   
    const task=this.taskModel.findByIdAndDelete({_id:id}).exec();

    return task;
  }
}
