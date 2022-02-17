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
  UseGuards,
  Request,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TasksService } from './tasks.service';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks(@Res() res: Response, @Request() req) {
    const tasks = await this.tasksService.getTasks(req.user.userId);
    return res.status(HttpStatus.OK).json({
      message: 'stored tasks',
      tasks,
    });
  }

  @Get(':id')
  async getTask(@Param('id') id: string, @Res() res: Response, @Request() req) {
    const task = await this.tasksService.getTask(id);

    if (task.userId.toString() !== req.user.userId) {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'not authorized',
      });
    }

    return res.status(HttpStatus.OK).json({
      message: 'stored task',
      task,
    });
  }

  @Post()
  async createTask(
    @Body() taskDto: CreateTaskDto,
    @Res() res: Response,
    @Request() req,
  ) {
    const task = await this.tasksService.createTask({
      ...taskDto,
      userId: req.user.userId,
    });

    if (task.userId.toString() !== req.user.userId) {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'not authorized',
      });
    }

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
    @Request() req,
  ) {
    const task = await this.tasksService.updateTask(id, taskDto);

    if (task.userId.toString() !== req.user.userId) {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'not authorized',
      });
    }

    return res.status(HttpStatus.OK).json({
      message: 'updated task',
      task,
    });
  }

  @Delete(':id')
  async deleteTask(
    @Param('id') id: string,
    @Res() res: Response,
    @Request() req,
  ) {
    const task = await this.tasksService.deleteTask(id);

    if (task.userId.toString() !== req.user.userId) {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'not authorized',
      });
    }

    return res.status(HttpStatus.OK).json({
      message: 'deleted task',
      task,
    });
  }
}
