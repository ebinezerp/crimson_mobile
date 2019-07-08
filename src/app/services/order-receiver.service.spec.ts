import { TestBed } from '@angular/core/testing';

import { OrderReceiverService } from './order-receiver.service';

describe('OrderReceiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderReceiverService = TestBed.get(OrderReceiverService);
    expect(service).toBeTruthy();
  });
});
