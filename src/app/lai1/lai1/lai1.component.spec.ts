import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lai1Component } from './lai1.component';

describe('Lai1Component', () => {
  let component: Lai1Component;
  let fixture: ComponentFixture<Lai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
