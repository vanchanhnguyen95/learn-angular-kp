import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtFormComponent } from './bt-form.component';

describe('BtFormComponent', () => {
  let component: BtFormComponent;
  let fixture: ComponentFixture<BtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
