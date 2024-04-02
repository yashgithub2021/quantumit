import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiRobotComponent } from './ai-robot.component';

describe('AiRobotComponent', () => {
  let component: AiRobotComponent;
  let fixture: ComponentFixture<AiRobotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiRobotComponent]
    });
    fixture = TestBed.createComponent(AiRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
