import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingComponent } from './digital-marketing.component';

describe('DigitalMarketingComponent', () => {
  let component: DigitalMarketingComponent;
  let fixture: ComponentFixture<DigitalMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalMarketingComponent]
    });
    fixture = TestBed.createComponent(DigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
