import { TestBed } from '@angular/core/testing';

import { ResumeTaskService } from './resume-task.service';

describe('ResumeTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeTaskService = TestBed.get(ResumeTaskService);
    expect(service).toBeTruthy();
  });
});
