import { TestBed } from '@angular/core/testing';

import { AngularTreeTableService } from './angular-tree-table.service';

describe('AngularTreeTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularTreeTableService = TestBed.get(AngularTreeTableService);
    expect(service).toBeTruthy();
  });
});
