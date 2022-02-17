export class CreateTaskDto {
  title: string;
  done: boolean;
  userId: string;
  createdAt?: Date;
}
