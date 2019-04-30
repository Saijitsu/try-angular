export enum TaskStatus {
  ToDo = 'A Faire',
  Doing = 'En cours',
  Done = 'Fait'
}

export class Task {
  public name: string;
  public status: TaskStatus;
  public deadLine: Date;
}

