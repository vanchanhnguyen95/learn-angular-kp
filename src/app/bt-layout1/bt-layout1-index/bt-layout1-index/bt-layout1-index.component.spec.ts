import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtLayout1IndexComponent } from './bt-layout1-index.component';

describe('BtLayout1IndexComponent', () => {
  let component: BtLayout1IndexComponent;
  let fixture: ComponentFixture<BtLayout1IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtLayout1IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtLayout1IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
