import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTComponent } from './advance-t.component';

describe('AdvanceTComponent', () => {
  let component: AdvanceTComponent;
  let fixture: ComponentFixture<AdvanceTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceTComponent]
    });
    fixture = TestBed.createComponent(AdvanceTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
