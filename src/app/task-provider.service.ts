import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TaskProviderService {

  tasks = new Array<Task>();
  tasksSubject = new ReplaySubject<Task[]>(1);
  constructor(private http: HttpClient) {
    this.http.get<Task[]>('/assets/tasks.json').subscribe(tasks => {
      this.tasks = tasks;
      this.tasksSubject.next(this.tasks);
    });
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
    // return this.http.get<Task[]>('/assets/tasks.json'); // on va typer get avec le retour que l'on veut.
  }

  add(newTask: Task) {
    // Ajoute la tâche en début de liste
    this.tasks.unshift(newTask);
    // Notifie tout les abonnés avec la nouvelle version de la liste
    this.tasksSubject.next(this.tasks);
  }
}
