import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInLoaderComponent } from './check-in-loader.component';

describe('CheckInLoaderComponent', () => {
  let component: CheckInLoaderComponent;
  let fixture: ComponentFixture<CheckInLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
