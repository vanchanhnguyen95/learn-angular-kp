import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lai1ItemComponent } from './lai1-item.component';

describe('Lai1ItemComponent', () => {
  let component: Lai1ItemComponent;
  let fixture: ComponentFixture<Lai1ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lai1ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lai1ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
