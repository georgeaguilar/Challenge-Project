import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongoModule } from './config/mongo.module';

@Module({
  imports: [TasksModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
