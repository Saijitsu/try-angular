import { Task } from '../task';
// import { Component, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { TaskProviderService } from '../task-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  // @Output() taskCreated = new EventEmitter<Task>();
  newTask = new Task();

  constructor(private provider: TaskProviderService, private router: Router) { }

  addTask() {
    this.provider.add(this.newTask);
    // this.taskCreated.emit(this.newTask);
    this.router.navigate(['/task', this.newTask.id]);
  }

}
