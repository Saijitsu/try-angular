export enum TaskStatus {
  ToDo,
  Doing,
  Done
}

export class Task {
  public name: string;
  public status: TaskStatus;
  public deadLine: Date;
}

