// import { TaskProviderService } from './task-provider.service';
import { Task } from './task';
import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /*  export class AppComponent implements OnInit {

  tasks: Array<Task> = [];
   currentTask = new Task();*/

  // Le taskprovider est construit ici simplement grace au typage ici:
  /*constructor(public manager: TaskProviderService) { }

  ngOnInit(): void {
    this.manager.getTasks().subscribe(tasks => { // tasks de l'observable ici
      this.tasks = tasks;
      this.currentTask = this.tasks[0];
    });
// On va récupérer l'observable, on applique à l'objet tasks le type Task function(tasks: Task[]): Task[]
// on récupère tasks en asynchrone, on va mettre le currentTask à jour
// le Subscribe souscrit à quelque chose d'asynchrone pour mettre à jour de la donnée syncrhone
  }
  setCurrentTask(task: Task): void {
    this.currentTask = task;
  }

  addTaskToList(task: Task): void {
    this.tasks.unshift(task);
    this.currentTask = task;
  }*/

}


