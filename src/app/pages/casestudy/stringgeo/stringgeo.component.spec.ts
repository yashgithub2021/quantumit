import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringgeoComponent } from './stringgeo.component';

describe('StringgeoComponent', () => {
  let component: StringgeoComponent;
  let fixture: ComponentFixture<StringgeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringgeoComponent]
    });
    fixture = TestBed.createComponent(StringgeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
