import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtLayout1Component } from './bt-layout1.component';

describe('BtLayout1Component', () => {
  let component: BtLayout1Component;
  let fixture: ComponentFixture<BtLayout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtLayout1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
