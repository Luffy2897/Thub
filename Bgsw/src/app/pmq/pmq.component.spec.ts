import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmqComponent } from './pmq.component';

describe('PmqComponent', () => {
  let component: PmqComponent;
  let fixture: ComponentFixture<PmqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmqComponent]
    });
    fixture = TestBed.createComponent(PmqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
