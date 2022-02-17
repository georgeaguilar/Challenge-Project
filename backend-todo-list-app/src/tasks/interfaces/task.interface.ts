import { Document } from 'mongoose';

export interface ITask extends Document {
  id: string;
  title: string;
  done: boolean;
  userId: string;
  createdAt?: Date;
}
