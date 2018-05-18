import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lai1IndexSliderComponent } from './lai1-index-slider.component';

describe('Lai1IndexSliderComponent', () => {
  let component: Lai1IndexSliderComponent;
  let fixture: ComponentFixture<Lai1IndexSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lai1IndexSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lai1IndexSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
