import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPComponent } from './basic-p.component';

describe('BasicPComponent', () => {
  let component: BasicPComponent;
  let fixture: ComponentFixture<BasicPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicPComponent]
    });
    fixture = TestBed.createComponent(BasicPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
