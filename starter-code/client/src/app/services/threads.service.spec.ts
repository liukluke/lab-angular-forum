import { TestBed } from '@angular/core/testing';

import { ThreadsService } from './threads.service';

describe('ThreadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreadsService = TestBed.get(ThreadsService);
    expect(service).toBeTruthy();
  });
});
