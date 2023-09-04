import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSpocComponent } from './location-spoc.component';

describe('LocationSpocComponent', () => {
  let component: LocationSpocComponent;
  let fixture: ComponentFixture<LocationSpocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationSpocComponent]
    });
    fixture = TestBed.createComponent(LocationSpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
