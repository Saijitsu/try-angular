import { TaskProviderService } from './task-provider.service';
import { Task } from './task';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentTaskService {

  taskSubject = new Subject<Task>();

  constructor(private provider: TaskProviderService) {
    this.provider.getTasks().subscribe(tasks => this.taskSubject.next(tasks[0]));
  }

  getCurrentTask(): Observable<Task> {
    // Les composants peuvent souscrire aux observables
    // mais ils ne doivent pas pouvoir déclencher de nouveaux états
    return this.taskSubject.asObservable();
  }

  define(task: Task) {
    this.taskSubject.next(task);
    // En cas de changement de tâche courante on va notifier tous
    // les observateurs avec un nouvel état
    // next: methode de subject qui va déclencher les observer (event)
  }
}
