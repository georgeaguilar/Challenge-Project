import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/api';

@Module({
  imports: [MongooseModule.forRoot(mongoDB)],
})
export class MongoModule {}
