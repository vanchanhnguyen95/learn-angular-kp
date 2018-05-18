import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtLayout1IndexContentComponent } from './bt-layout1-index-content.component';

describe('BtLayout1IndexContentComponent', () => {
  let component: BtLayout1IndexContentComponent;
  let fixture: ComponentFixture<BtLayout1IndexContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtLayout1IndexContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtLayout1IndexContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
