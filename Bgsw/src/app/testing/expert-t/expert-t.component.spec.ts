import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTComponent } from './expert-t.component';

describe('ExpertTComponent', () => {
  let component: ExpertTComponent;
  let fixture: ComponentFixture<ExpertTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertTComponent]
    });
    fixture = TestBed.createComponent(ExpertTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
