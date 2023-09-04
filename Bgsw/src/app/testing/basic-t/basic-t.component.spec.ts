import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTComponent } from './basic-t.component';

describe('BasicTComponent', () => {
  let component: BasicTComponent;
  let fixture: ComponentFixture<BasicTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicTComponent]
    });
    fixture = TestBed.createComponent(BasicTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
