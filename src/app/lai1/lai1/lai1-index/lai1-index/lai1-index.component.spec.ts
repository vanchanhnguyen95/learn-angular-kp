import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lai1IndexComponent } from './lai1-index.component';

describe('Lai1IndexComponent', () => {
  let component: Lai1IndexComponent;
  let fixture: ComponentFixture<Lai1IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lai1IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lai1IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
