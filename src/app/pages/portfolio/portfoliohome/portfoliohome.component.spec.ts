import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliohomeComponent } from './portfoliohome.component';

describe('PortfoliohomeComponent', () => {
  let component: PortfoliohomeComponent;
  let fixture: ComponentFixture<PortfoliohomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliohomeComponent]
    });
    fixture = TestBed.createComponent(PortfoliohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
