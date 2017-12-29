import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBoardingDocumentComponent } from './get-boarding-document.component';

describe('GetBoardingDocumentComponent', () => {
  let component: GetBoardingDocumentComponent;
  let fixture: ComponentFixture<GetBoardingDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBoardingDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBoardingDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
