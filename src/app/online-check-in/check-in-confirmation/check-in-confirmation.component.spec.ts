import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInConfirmationComponent } from './check-in-confirmation.component';

describe('CheckInConfirmationComponent', () => {
  let component: CheckInConfirmationComponent;
  let fixture: ComponentFixture<CheckInConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
