import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashNewsComponent } from './flash-news.component';

describe('FlashNewsComponent', () => {
  let component: FlashNewsComponent;
  let fixture: ComponentFixture<FlashNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashNewsComponent]
    });
    fixture = TestBed.createComponent(FlashNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
