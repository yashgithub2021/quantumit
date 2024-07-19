import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCasestudyComponent } from './ai-casestudy.component';

describe('AiCasestudyComponent', () => {
  let component: AiCasestudyComponent;
  let fixture: ComponentFixture<AiCasestudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiCasestudyComponent]
    });
    fixture = TestBed.createComponent(AiCasestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
