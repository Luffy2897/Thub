import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcqComponent } from './tcq.component';

describe('TcqComponent', () => {
  let component: TcqComponent;
  let fixture: ComponentFixture<TcqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcqComponent]
    });
    fixture = TestBed.createComponent(TcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
