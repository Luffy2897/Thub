import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceEleComponent } from './advance-ele.component';

describe('AdvanceEleComponent', () => {
  let component: AdvanceEleComponent;
  let fixture: ComponentFixture<AdvanceEleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceEleComponent]
    });
    fixture = TestBed.createComponent(AdvanceEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
