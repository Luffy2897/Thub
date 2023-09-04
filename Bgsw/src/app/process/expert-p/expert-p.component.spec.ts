import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertPComponent } from './expert-p.component';

describe('ExpertPComponent', () => {
  let component: ExpertPComponent;
  let fixture: ComponentFixture<ExpertPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertPComponent]
    });
    fixture = TestBed.createComponent(ExpertPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
