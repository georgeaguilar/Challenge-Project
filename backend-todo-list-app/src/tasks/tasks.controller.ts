import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks(@Res() res: Response) {
    const tasks = await this.tasksService.getTasks();
    return res.status(HttpStatus.OK).json({
      message: 'stored tasks',
      tasks,
    });
  }

  @Get(':id')
  async getTask(@Param('id') id: string, @Res() res: Response) {
    const task = await this.tasksService.getTask(id);
    return res.status(HttpStatus.OK).json({
      message: 'stored task',
      task,
    });
  }

  @Post()
  async createTask(@Body() taskDto: CreateTaskDto, @Res() res: Response) {
    const task = await this.tasksService.createTask(taskDto);
    return res.status(HttpStatus.OK).json({
      message: 'created task',
      task,
    });
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() taskDto: UpdateTaskDto,
    @Res() res: Response,
  ) {
    const task = await this.tasksService.updateTask(id, taskDto);
    return res.status(HttpStatus.OK).json({
      message: 'updated task',
      task,
    });
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string, @Res() res: Response) {
    const task = await this.tasksService.deleteTask(id);
    return res.status(HttpStatus.OK).json({
      message: 'deleted task',
      task,
    });
  }
}
