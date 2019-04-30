import { Task, TaskStatus } from './task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

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
  currentTask = this.tasks[0];

  setCurrentTask(task: Task) {
    this.currentTask = task;
  }

  addTaskToList(task: Task) {
    this.tasks.unshift(task);
    this.currentTask = task;
  }

}


