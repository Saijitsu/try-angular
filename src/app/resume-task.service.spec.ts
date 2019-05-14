import { TestBed } from '@angular/core/testing';
import { ResumeTaskService } from './resume-task.service';
import { TaskProviderService } from './task-provider.service';
import { TaskProviderStub } from './task-provider.stub';



describe('ResumeTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: TaskProviderService, useValue: TaskProviderStub }]
  }));

  it('should be created', () => {
    const service: ResumeTaskService = TestBed.get(ResumeTaskService);
    expect(service).toBeTruthy();
  });

  it('should compute resume about task status', () => {
    const service: ResumeTaskService = TestBed.get(ResumeTaskService);

    service.getResume().subscribe(result => expect(result.length).toBe(3));
  });
});
