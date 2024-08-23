import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepitgoingComponent } from './keepitgoing.component';

describe('FeaturedcasestudyComponent', () => {
  let component: KeepitgoingComponent;
  let fixture: ComponentFixture<KeepitgoingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeepitgoingComponent],
    });
    fixture = TestBed.createComponent(KeepitgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
