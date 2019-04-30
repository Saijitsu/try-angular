import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  @Input() taskList: Array<Task>; // récupère une donnée du parent
  @Output() taskSelected = new EventEmitter<Task>(); // va être typé directement à l'instanciation
  // retourne une donnée au parent (peu etre initialisé dans le constructeur, ngOnInit ou directement où il est)

  constructor() {
    // va comporter uniquement les instructions pour que l'objet soit viable.
   }

  ngOnInit() {
  }

  select(task: Task) {
    console.log('click on nav list', task);
    this.taskSelected.emit(task);
    // Va emettre ici la donnée attendue
  }
}
