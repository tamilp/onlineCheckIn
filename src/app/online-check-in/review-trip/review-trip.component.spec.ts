import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTripComponent } from './review-trip.component';

describe('ReviewTripComponent', () => {
  let component: ReviewTripComponent;
  let fixture: ComponentFixture<ReviewTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
