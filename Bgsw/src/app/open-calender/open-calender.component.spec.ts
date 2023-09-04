import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCalenderComponent } from './open-calender.component';

describe('OpenCalenderComponent', () => {
  let component: OpenCalenderComponent;
  let fixture: ComponentFixture<OpenCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCalenderComponent]
    });
    fixture = TestBed.createComponent(OpenCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
