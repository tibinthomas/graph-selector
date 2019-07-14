import { TestBed } from '@angular/core/testing';

import { WcGraphSelectorService } from './wc-graph-selector.service';

describe('WcGraphSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WcGraphSelectorService = TestBed.get(WcGraphSelectorService);
    expect(service).toBeTruthy();
  });
});
