import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareComponent } from './healthcare.component';

describe('HealthcareComponent', () => {
  let component: HealthcareComponent;
  let fixture: ComponentFixture<HealthcareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthcareComponent]
    });
    fixture = TestBed.createComponent(HealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
