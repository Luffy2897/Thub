import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertEleComponent } from './expert-ele.component';

describe('ExpertEleComponent', () => {
  let component: ExpertEleComponent;
  let fixture: ComponentFixture<ExpertEleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertEleComponent]
    });
    fixture = TestBed.createComponent(ExpertEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
