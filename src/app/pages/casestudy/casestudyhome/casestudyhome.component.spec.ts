import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyhomeComponent } from './casestudyhome.component';

describe('CasestudyhomeComponent', () => {
  let component: CasestudyhomeComponent;
  let fixture: ComponentFixture<CasestudyhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasestudyhomeComponent]
    });
    fixture = TestBed.createComponent(CasestudyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
