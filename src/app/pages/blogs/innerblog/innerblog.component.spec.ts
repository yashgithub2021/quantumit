import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerblogComponent } from './innerblog.component';

describe('InnerblogComponent', () => {
  let component: InnerblogComponent;
  let fixture: ComponentFixture<InnerblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerblogComponent]
    });
    fixture = TestBed.createComponent(InnerblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
