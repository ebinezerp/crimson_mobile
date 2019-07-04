import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageproductComponent } from './mainpageproduct.component';

describe('MainpageproductComponent', () => {
  let component: MainpageproductComponent;
  let fixture: ComponentFixture<MainpageproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpageproductComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
