import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TaksService } from './taks/taks.service';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService, TaksService],
})
export class AppModule {}
