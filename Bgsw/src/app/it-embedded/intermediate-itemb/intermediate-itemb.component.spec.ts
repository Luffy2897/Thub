import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateItembComponent } from './intermediate-itemb.component';

describe('IntermediateItembComponent', () => {
  let component: IntermediateItembComponent;
  let fixture: ComponentFixture<IntermediateItembComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediateItembComponent]
    });
    fixture = TestBed.createComponent(IntermediateItembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
