import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceEComponent } from './advance-e.component';

describe('AdvanceEComponent', () => {
  let component: AdvanceEComponent;
  let fixture: ComponentFixture<AdvanceEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceEComponent]
    });
    fixture = TestBed.createComponent(AdvanceEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
