import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELECTRICALComponent } from './electrical.component';

describe('ELECTRICALComponent', () => {
  let component: ELECTRICALComponent;
  let fixture: ComponentFixture<ELECTRICALComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELECTRICALComponent]
    });
    fixture = TestBed.createComponent(ELECTRICALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
