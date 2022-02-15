import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  done: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});
