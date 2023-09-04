import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertEComponent } from './expert-e.component';

describe('ExpertEComponent', () => {
  let component: ExpertEComponent;
  let fixture: ComponentFixture<ExpertEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertEComponent]
    });
    fixture = TestBed.createComponent(ExpertEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
