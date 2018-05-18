import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lai1HeaderComponent } from './lai1-header.component';

describe('Lai1HeaderComponent', () => {
  let component: Lai1HeaderComponent;
  let fixture: ComponentFixture<Lai1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lai1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lai1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
