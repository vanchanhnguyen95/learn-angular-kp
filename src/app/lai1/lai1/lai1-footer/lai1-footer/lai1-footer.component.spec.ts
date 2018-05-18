import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lai1FooterComponent } from './lai1-footer.component';

describe('Lai1FooterComponent', () => {
  let component: Lai1FooterComponent;
  let fixture: ComponentFixture<Lai1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lai1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lai1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
