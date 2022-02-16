import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks() {
    return await this.tasksService.getTasks();
  }

  @Get(':id')
  async getTask(@Param('id') id: string) {
    return await this.tasksService.getTask(id);
  }

  @Post()
  async createTask(@Body() taskDto: CreateTaskDto) {
    return await this.tasksService.createTask(taskDto);
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() taskDto: UpdateTaskDto) {
    return await this.tasksService.updateTask(id, taskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(id);
  }
}
