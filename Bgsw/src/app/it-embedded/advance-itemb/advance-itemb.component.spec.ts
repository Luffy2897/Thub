import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceItembComponent } from './advance-itemb.component';

describe('AdvanceItembComponent', () => {
  let component: AdvanceItembComponent;
  let fixture: ComponentFixture<AdvanceItembComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceItembComponent]
    });
    fixture = TestBed.createComponent(AdvanceItembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
