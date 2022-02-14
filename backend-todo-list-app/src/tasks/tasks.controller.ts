import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    async getTasks(){
        return 'all the tasks';
    }

    @Get(':id')
    async getTask(@Param('id') id: string){
        return `task ${id}`;
    }

    @Post()
    async createTask(taskDto: any){
        return "create a task";
    }

    @Put(':id')
    async updateTask(@Param('id') id: string){
        return 'edit task';
    }

    async deleteTask(@Param('id') id: string){
        return id;
    }
}
