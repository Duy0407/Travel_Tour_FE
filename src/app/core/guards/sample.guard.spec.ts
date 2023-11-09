import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sampleGuard } from './sample.guard';

describe('sampleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sampleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
