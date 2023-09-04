import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePComponent } from './advance-p.component';

describe('AdvancePComponent', () => {
  let component: AdvancePComponent;
  let fixture: ComponentFixture<AdvancePComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancePComponent]
    });
    fixture = TestBed.createComponent(AdvancePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
