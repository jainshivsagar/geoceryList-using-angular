import { TestBed } from '@angular/core/testing';

import { ItemCrudServiceService } from './item-crud-service.service';

describe('ItemCrudServiceService', () => {
  let service: ItemCrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
