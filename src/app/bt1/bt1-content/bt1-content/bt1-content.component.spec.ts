import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1ContentComponent } from './bt1-content.component';

describe('Bt1ContentComponent', () => {
  let component: Bt1ContentComponent;
  let fixture: ComponentFixture<Bt1ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
