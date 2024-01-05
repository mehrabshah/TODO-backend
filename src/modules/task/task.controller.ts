import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('createTask')
  create(@Body() createTaskDto: CreateTaskDto) {
    try {
      return this.taskService.create(createTaskDto);
    } catch (error) {
      return 'Failed to create a task';
    }
  }

  @Get('getAllTask')
  findAll() {
    try {
      return this.taskService.findAll();
    } catch (error) {
      return 'Failed to fetch tasks';
    }
  }
  @Patch('updateTask')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    try {
      return this.taskService.update(+id, updateTaskDto);
    } catch (error) {
      return 'Failed to update task';
    }
  }

  @Delete('deleteTask')
  remove(@Param('id') id: string) {
    try {
      return this.taskService.remove(+id);
    } catch (error) {
      return 'Failed to delete task';
    }
  }
}
