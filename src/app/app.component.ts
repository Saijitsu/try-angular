import { TaskProviderService } from './task-provider.service';
import { Task } from './task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  tasks: Array<Task> = [];
  currentTask: Task;

  // Le taskprovider est construit ici simplement grace au typage ici:
  constructor(public manager: TaskProviderService) { }

  ngOnInit(): void {
    this.tasks = this.manager.tasks;
    this.currentTask = this.tasks[0];
  }
  setCurrentTask(task: Task): void {
    this.currentTask = task;
  }

  addTaskToList(task: Task): void {
    this.tasks.unshift(task);
    this.currentTask = task;
  }

}


