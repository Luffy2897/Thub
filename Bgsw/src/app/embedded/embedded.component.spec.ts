import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedComponent } from './embedded.component';

describe('EmbeddedComponent', () => {
  let component: EmbeddedComponent;
  let fixture: ComponentFixture<EmbeddedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbeddedComponent]
    });
    fixture = TestBed.createComponent(EmbeddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
