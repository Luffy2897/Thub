import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediatePComponent } from './intermediate-p.component';

describe('IntermediatePComponent', () => {
  let component: IntermediatePComponent;
  let fixture: ComponentFixture<IntermediatePComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediatePComponent]
    });
    fixture = TestBed.createComponent(IntermediatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
