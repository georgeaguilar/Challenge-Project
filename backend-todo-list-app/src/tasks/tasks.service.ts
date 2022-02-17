import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundError } from 'rxjs';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { ITask } from './interfaces/task.interface';

@Injectable()
export class TasksService {
  constructor(@InjectModel('tasks') private readonly taskModel: Model<ITask>) {}

  async getTasks(userId: string): Promise<ITask[]> {
    return await this.taskModel.find({ userId });
  }

  async getTask(id: string): Promise<ITask> {
    const task = await this.taskModel.findById(id);

    // if (task.userId !== userId) throw new NotFoundException(`access error`);
    if (!task) throw new NotFoundException(`id ${id} not found`);

    return task;
  }

  async createTask(taskDto: CreateTaskDto): Promise<ITask> {
    const task = new this.taskModel(taskDto);
    return await task.save();
  }

  async updateTask(id: string, taskDto: UpdateTaskDto): Promise<ITask> {
    const task = await this.taskModel.findByIdAndUpdate(id, taskDto, {
      new: true,
    });

    if (!task) throw new NotFoundException(`id ${id} not found`);

    return task;
  }

  async deleteTask(id: string): Promise<ITask> {
    const task = await this.taskModel.findByIdAndDelete(id);

    if (!task) throw new NotFoundException(`id ${id} not found`);

    return task;
  }
}
