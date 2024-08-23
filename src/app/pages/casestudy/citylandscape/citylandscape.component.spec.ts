import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitylandscapeComponent } from './citylandscape.component';

describe('CitylandscapeComponent', () => {
  let component: CitylandscapeComponent;
  let fixture: ComponentFixture<CitylandscapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitylandscapeComponent]
    });
    fixture = TestBed.createComponent(CitylandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
