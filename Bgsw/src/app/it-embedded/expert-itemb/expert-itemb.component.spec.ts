import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertItembComponent } from './expert-itemb.component';

describe('ExpertItembComponent', () => {
  let component: ExpertItembComponent;
  let fixture: ComponentFixture<ExpertItembComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertItembComponent]
    });
    fixture = TestBed.createComponent(ExpertItembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
