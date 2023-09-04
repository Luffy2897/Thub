import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEleComponent } from './basic-ele.component';

describe('BasicEleComponent', () => {
  let component: BasicEleComponent;
  let fixture: ComponentFixture<BasicEleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEleComponent]
    });
    fixture = TestBed.createComponent(BasicEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
