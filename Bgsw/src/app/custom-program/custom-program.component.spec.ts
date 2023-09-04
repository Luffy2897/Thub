import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProgramComponent } from './custom-program.component';

describe('CustomProgramComponent', () => {
  let component: CustomProgramComponent;
  let fixture: ComponentFixture<CustomProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomProgramComponent]
    });
    fixture = TestBed.createComponent(CustomProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
