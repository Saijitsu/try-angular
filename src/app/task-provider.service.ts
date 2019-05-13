import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TaskProviderService {

  tasks = new Array<Task>(); // conserve la liste des tâches
  tasksSubject = new ReplaySubject<Task[]>(1); // le sujet peut être observée et donner un new état.
  // si des observateurs, ils ici la dernière tâche (check si AsyncSubject pas préférable).

  constructor(private http: HttpClient) {  // ici dès l'instant ou implanté le service on y a accès.
    this.http.get<Task[]>('/assets/tasks.json').subscribe(tasks => { 
      this.tasks = tasks;
      this.tasksSubject.next(this.tasks);
    });
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
    // return this.http.get<Task[]>('/assets/tasks.json'); // on va typer get avec le retour que l'on veut.
    // <=Ici récupère un objet observable: potentiel nouvel état > état final
  }

  add(newTask: Task) {
    // Ajoute la tâche en début de liste
    this.tasks.unshift(newTask);
    // Notifie tout les abonnés avec la nouvelle version de la liste
    this.tasksSubject.next(this.tasks);
  }
}
