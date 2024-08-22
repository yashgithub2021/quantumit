import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoplansComponent } from './seoplans.component';

describe('SeoplansComponent', () => {
  let component: SeoplansComponent;
  let fixture: ComponentFixture<SeoplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeoplansComponent]
    });
    fixture = TestBed.createComponent(SeoplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
