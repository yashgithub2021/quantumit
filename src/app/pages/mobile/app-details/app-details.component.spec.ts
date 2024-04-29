import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsComponent } from './app-details.component';

describe('AppDetailsComponent', () => {
  let component: AppDetailsComponent;
  let fixture: ComponentFixture<AppDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDetailsComponent]
    });
    fixture = TestBed.createComponent(AppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
