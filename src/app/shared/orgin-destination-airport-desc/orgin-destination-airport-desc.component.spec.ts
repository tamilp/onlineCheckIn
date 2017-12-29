import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrginDestinationAirportDescComponent } from './orgin-destination-airport-desc.component';

describe('OrginDestinationAirportDescComponent', () => {
  let component: OrginDestinationAirportDescComponent;
  let fixture: ComponentFixture<OrginDestinationAirportDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrginDestinationAirportDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrginDestinationAirportDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
