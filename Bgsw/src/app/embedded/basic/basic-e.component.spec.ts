import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEComponent } from './basic-e.component';

describe('BasicEComponent', () => {
  let component: BasicEComponent;
  let fixture: ComponentFixture<BasicEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEComponent]
    });
    fixture = TestBed.createComponent(BasicEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
