import { Task, TaskStatus } from './task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // title = 'todo';
  task: Task = {
    name: 'Learn Angular',
    status: TaskStatus.Doing,
    deadLine: new Date('2019-05-02')
  };
}

