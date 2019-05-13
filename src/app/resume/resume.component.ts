import { Component, OnInit } from '@angular/core';
import { ResumeTaskService } from '../resume-task.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

private resume = [0, 0, 0];

  constructor(private resumeService: ResumeTaskService) { }

  ngOnInit() {
    this.resumeService.getResume().subscribe(resume => this.resume = resume) // va fournir le résumé à chaque fois qu'il change
  }

}

