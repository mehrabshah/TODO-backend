import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto) {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll() {
    const tasks = await this.taskModel.find().exec();
    return tasks;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const existingTask = await this.taskModel.findById(id);
    

    if (!existingTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
    return updatedTask;
  }

  async remove(id: string) {
 
    const existingTask = await this.taskModel.findById(id);
    
    if (!existingTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    const task = await this.taskModel.findByIdAndDelete(id).exec();

    return task;
  }
}
