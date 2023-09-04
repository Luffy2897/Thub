import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateEleComponent } from './intermediate-ele.component';

describe('IntermediateEleComponent', () => {
  let component: IntermediateEleComponent;
  let fixture: ComponentFixture<IntermediateEleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediateEleComponent]
    });
    fixture = TestBed.createComponent(IntermediateEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
