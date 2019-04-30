export enum TaskStatus {
  ToDo = 'Tomorrow, I begin',
  Doing = 'In progress',
  Done = 'Already done!'
}

export class Task {
  public name: string;
  public status: TaskStatus;
  public deadLine: Date;
}
  /*// Object.assign(cible, ...sources)
  constructor(values: object = {}) {
    Object.assign(this, values);
  }*/

