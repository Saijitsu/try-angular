import { TaskStatus, Task} from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskProviderService {

  tasks: Array<Task> = [
    {
      name: 'Bien maîtriser Angular',
      status: TaskStatus.Doing,
      deadLine: new Date('2019-05-31')
    },
    {
      name: 'Apprendre React',
      status: TaskStatus.Done,
      deadLine: new Date('2019-07-11')
    },
    {
      name: 'Apprendre Vue',
      status: TaskStatus.Doing,
      deadLine: new Date('2019-10-19')
    },
    {
      name: 'Apprendre le Cobol',
      status: TaskStatus.ToDo,
      deadLine: new Date('1959-12-25')
    }
  ];
}
