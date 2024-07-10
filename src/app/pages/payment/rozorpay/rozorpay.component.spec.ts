import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RozorpayComponent } from './rozorpay.component';

describe('RozorpayComponent', () => {
  let component: RozorpayComponent;
  let fixture: ComponentFixture<RozorpayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RozorpayComponent]
    });
    fixture = TestBed.createComponent(RozorpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
