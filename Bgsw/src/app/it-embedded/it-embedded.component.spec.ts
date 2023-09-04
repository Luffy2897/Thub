import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITEMBEDDEDComponent } from './it-embedded.component';

describe('ITEMBEDDEDComponent', () => {
  let component: ITEMBEDDEDComponent;
  let fixture: ComponentFixture<ITEMBEDDEDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITEMBEDDEDComponent]
    });
    fixture = TestBed.createComponent(ITEMBEDDEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
