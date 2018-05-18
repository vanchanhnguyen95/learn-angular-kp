import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtLayout1IndexSliderComponent } from './bt-layout1-index-slider.component';

describe('BtLayout1IndexSliderComponent', () => {
  let component: BtLayout1IndexSliderComponent;
  let fixture: ComponentFixture<BtLayout1IndexSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtLayout1IndexSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtLayout1IndexSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
