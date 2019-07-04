import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeheaderComponent } from './homeheader.component';

describe('HomeheaderComponent', () => {
  let component: HomeheaderComponent;
  let fixture: ComponentFixture<HomeheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeheaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
