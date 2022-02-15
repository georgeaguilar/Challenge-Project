import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  async getTasks() {
    return 'all the tasks';
  }

  @Get(':id')
  async getTask(@Param('id') id: string) {
    return `task ${id}`;
  }

  @Post()
  async createTask(taskDto: CreateTaskDto) {
    return taskDto;
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, taskDto: UpdateTaskDto) {
    return taskDto;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return id;
  }
}
