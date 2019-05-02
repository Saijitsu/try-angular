import { CurrentTaskService } from './../current-task.service';
import { Task } from '../task';
// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  // @Input() task: Task;
  task = new Task();

  constructor(private currentTaskService: CurrentTaskService) { }

  ngOnInit() {
    this.currentTaskService.getCurrentTask().subscribe(task => this.task = task);
  }
}
