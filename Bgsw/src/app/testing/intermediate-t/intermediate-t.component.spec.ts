import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateTComponent } from './intermediate-t.component';

describe('IntermediateTComponent', () => {
  let component: IntermediateTComponent;
  let fixture: ComponentFixture<IntermediateTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediateTComponent]
    });
    fixture = TestBed.createComponent(IntermediateTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
