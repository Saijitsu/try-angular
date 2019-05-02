import { Task } from '../task';
// import { Component, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { TaskProviderService } from '../task-provider.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  // @Output() taskCreated = new EventEmitter<Task>();
  newTask = new Task();

  constructor(private provider: TaskProviderService) {}

    addTask() {
    this.provider.add(this.newTask);
    // this.taskCreated.emit(this.newTask);
    this.newTask = new Task(); // Pour initialiser à chaque nouvel objet
  }

}
