import { Task } from '../task';
// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TaskProviderService } from '../task-provider.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  // @Input() task: Task;
  task = new Task();

  constructor(private route: ActivatedRoute, private provider: TaskProviderService) { }
  // activated route permet de rester sur le même composant tout en actualisant la valeur

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
      this.task = this.provider.getById(+params.get('id')))
    // ici le + sert d'opérande
  }
}
