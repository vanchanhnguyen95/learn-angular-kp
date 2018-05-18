import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayBinDingComponent } from './one-way-bin-ding.component';

describe('OneWayBinDingComponent', () => {
  let component: OneWayBinDingComponent;
  let fixture: ComponentFixture<OneWayBinDingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayBinDingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayBinDingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
