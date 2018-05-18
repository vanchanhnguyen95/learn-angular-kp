import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lai1IndexContentComponent } from './lai1-index-content.component';

describe('Lai1IndexContentComponent', () => {
  let component: Lai1IndexContentComponent;
  let fixture: ComponentFixture<Lai1IndexContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lai1IndexContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lai1IndexContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
