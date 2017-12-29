import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInTitleComponent } from './check-in-title.component';

describe('CheckInTitleComponent', () => {
  let component: CheckInTitleComponent;
  let fixture: ComponentFixture<CheckInTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
