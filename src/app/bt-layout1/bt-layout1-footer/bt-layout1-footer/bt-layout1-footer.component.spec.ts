import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtLayout1FooterComponent } from './bt-layout1-footer.component';

describe('BtLayout1FooterComponent', () => {
  let component: BtLayout1FooterComponent;
  let fixture: ComponentFixture<BtLayout1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtLayout1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtLayout1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
