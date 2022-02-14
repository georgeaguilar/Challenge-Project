import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-taskdto';
import { UpdateTaskDto } from './dtos/update-taskdto';

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

  async deleteTask(@Param('id') id: string) {
    return id;
  }
}
