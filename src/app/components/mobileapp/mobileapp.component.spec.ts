import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappComponent } from './mobileapp.component';

describe('MobileappComponent', () => {
  let component: MobileappComponent;
  let fixture: ComponentFixture<MobileappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileappComponent]
    });
    fixture = TestBed.createComponent(MobileappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
