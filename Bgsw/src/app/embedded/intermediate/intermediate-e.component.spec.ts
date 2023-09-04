import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateEComponent } from './intermediate-e.component';

describe('IntermediateEComponent', () => {
  let component: IntermediateEComponent;
  let fixture: ComponentFixture<IntermediateEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediateEComponent]
    });
    fixture = TestBed.createComponent(IntermediateEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
