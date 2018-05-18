import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtLayout1HeaderComponent } from './bt-layout1-header.component';

describe('BtLayout1HeaderComponent', () => {
  let component: BtLayout1HeaderComponent;
  let fixture: ComponentFixture<BtLayout1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtLayout1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtLayout1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
