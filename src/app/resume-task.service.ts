import { Injectable } from '@angular/core';
import { TaskProviderService } from './task-provider.service';
import { Task } from './task';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeTaskService {

  private data: number[];
  resumeSubject = new Subject<number[]>();

  constructor(provider: TaskProviderService) {
    provider.getTasks().subscribe((tasks: Task[]) => {
      this.data = tasks.reduce((acc, cur) => {
        acc[cur.status]++;
        return acc;
      }, [0, 0, 0]);
      this.resumeSubject.next(this.data);
    });
  }

  getResume(): Observable<number[]> {
    return this.resumeSubject.asObservable()
  }
}