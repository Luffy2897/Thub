import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicItembComponent } from './basic-itemb.component';

describe('BasicItembComponent', () => {
  let component: BasicItembComponent;
  let fixture: ComponentFixture<BasicItembComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicItembComponent]
    });
    fixture = TestBed.createComponent(BasicItembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
