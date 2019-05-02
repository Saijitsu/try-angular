import { CurrentTaskService } from './../current-task.service';
import { TaskProviderService } from './../task-provider.service';
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  taskList: Array<Task>;
  /* @Input() taskList: Array<Task>; // récupère une donnée du parent
   @Output() taskSelected = new EventEmitter<Task>(); // va être typé directement à l'instanciation
   // retourne une donnée au parent (peu etre initialisé dans le constructeur, ngOnInit ou directement où il est)
 */
  constructor(private provider: TaskProviderService, private current: CurrentTaskService) {
    // va comporter uniquement les instructions pour que l'objet soit viable.
  }

  ngOnInit() {
    this.provider.getTasks().subscribe(tasks => this.taskList = tasks);
  }

  /*select(task: Task) {
    console.log('click on nav list', task);
    this.taskSelected.emit(task);
    // Va emettre ici la donnée attendue
  }*/

  select(task: Task) {
    console.log('click on nav list', task);
    this.current.define(task);
    // Va emettre ici la donnée attendue
  }
}
