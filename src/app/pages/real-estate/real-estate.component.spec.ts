import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateComponent } from './real-estate.component';

describe('RealEstateComponent', () => {
  let component: RealEstateComponent;
  let fixture: ComponentFixture<RealEstateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateComponent]
    });
    fixture = TestBed.createComponent(RealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
