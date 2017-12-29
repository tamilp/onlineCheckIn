import { Component, OnInit } from '@angular/core';
import { OnlineCheckInService } from '../../onlinecheckin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-review-trip',
  templateUrl: './review-trip.component.html',
  styleUrls: ['./review-trip.component.css']
})
export class ReviewTripComponent implements OnInit {

  changeFlight; confirmation; iPhen; ashColon; next: {};
  flights; flightStatus; flightsTo; onTime; depart; arrive; upgradeRequested; inFlightServiceMessage; flightAirportDetails: {};
  passengers; deltaSkyMiles; addFrequentFlyer: {};
  seats; changeSeat; mainCabinL: {};
  tripExtras; addTripExtras: {};
  bags; addBags; bagImg: {};

  serviceRequest; requestServiceMessage; addRequest: {};
  tripProtectionImg; tripProtection; for; currency; fare; peaceOfMind; buyNow; termsAndConditions: {};
  earnBonusMilesImg; earnBonusMiles; earnBonusMilesMessage; applyNow; termsApply: {};

  recordLocatorId: string;
  firstName; lastName; num; seatNum: string;
  originAirport; destinationAirport; originAirportDesc; destinationAirportDesc; departTime; arriveTime; flightNumber: string;

  flight: string = "Value";

  constructor(private _OnlineCheckInService : OnlineCheckInService, private router: Router) {

    this._OnlineCheckInService.getCheckInContentAPI()
    .subscribe(data => 
      {
        this.changeFlight = data.checkInContentAPI[0].checkInTitleBar.changeFlight
        this.confirmation = data.checkInContentAPI[0].checkInTitleBar.confirmation
        this.iPhen = data.checkInContentAPI[0].checkInTitleBar.iPhen
        this.ashColon = data.checkInContentAPI[0].checkInTitleBar.ashColon
        this.next = data.checkInContentAPI[0].checkInTitleBar.next

        this.flights = data.checkInContentAPI[0].flights.flights
        this.flightStatus = data.checkInContentAPI[0].flights.flightStatus
        this.flightsTo = data.checkInContentAPI[0].flights.flightsTo
        this.onTime = data.checkInContentAPI[0].flights.onTime
        this.depart = data.checkInContentAPI[0].flights.depart
        this.arrive = data.checkInContentAPI[0].flights.arrive
        this.upgradeRequested = data.checkInContentAPI[0].flights.upgradeRequested
        this.inFlightServiceMessage = data.checkInContentAPI[0].flights.inFlightServiceMessage
        this.flightAirportDetails = data.checkInContentAPI[0].flights.flightAirportDetails

        this.passengers = data.checkInContentAPI[0].passengers.passengers
        this.deltaSkyMiles = data.checkInContentAPI[0].passengers.deltaSkyMiles
        this.addFrequentFlyer = data.checkInContentAPI[0].passengers.addFrequentFlyer;

        this.seats = data.checkInContentAPI[0].seats.seats
        this.changeSeat = data.checkInContentAPI[0].seats.changeSeat
        this.mainCabinL = data.checkInContentAPI[0].seats.mainCabinL

        this.tripExtras = data.checkInContentAPI[0].tripExtras.tripExtras
        this.addTripExtras = data.checkInContentAPI[0].tripExtras.addTripExtras

        this.bags = data.checkInContentAPI[0].bags.bags
        this.addBags = data.checkInContentAPI[0].bags.addBags
        this.bagImg = data.checkInContentAPI[0].bags.bagImg

        this.serviceRequest = data.checkInContentAPI[0].serviceRequest.serviceRequest
        this.requestServiceMessage = data.checkInContentAPI[0].serviceRequest.requestServiceMessage
        this.addRequest = data.checkInContentAPI[0].serviceRequest.addRequest

        this.tripProtectionImg = data.checkInContentAPI[0].tripProtection.tripProtectionImg
        this.tripProtection = data.checkInContentAPI[0].tripProtection.tripProtection
        this.for = data.checkInContentAPI[0].tripProtection.for
        this.currency = data.checkInContentAPI[0].tripProtection.currency
        this.fare = data.checkInContentAPI[0].tripProtection.fare
        this.peaceOfMind = data.checkInContentAPI[0].tripProtection.peaceOfMind
        this.buyNow = data.checkInContentAPI[0].tripProtection.buyNow
        this.termsAndConditions = data.checkInContentAPI[0].tripProtection.termsAndConditions

        this.earnBonusMilesImg = data.checkInContentAPI[0].earnBonusMiles.earnBonusMilesImg
        this.earnBonusMiles = data.checkInContentAPI[0].earnBonusMiles.earnBonusMiles
        this.earnBonusMilesMessage = data.checkInContentAPI[0].earnBonusMiles.earnBonusMilesMessage
        this.applyNow = data.checkInContentAPI[0].earnBonusMiles.applyNow
        this.termsApply = data.checkInContentAPI[0].earnBonusMiles.termsApply
      })


    this._OnlineCheckInService.getCheckIntAPI()
    .subscribe(data => 
      {
        this.recordLocatorId = data.pnr.recordLocatorId;

        this.firstName = data.pnr.passengers[0].firstName;
        this.lastName = data.pnr.passengers[0].lastName;
        this.num = data.pnr.passengers[0].frequentFlyer.num;
        this.seatNum = data.pnr.passengers[0].seats[0].seatNum;

        this.originAirport = data.pnr.checkinTrip.originAirport.code;
        this.destinationAirport = data.pnr.checkinTrip.destinationAirport.code;
        this.originAirportDesc = data.pnr.checkinTrip.originAirport.desc;
        this.destinationAirportDesc = data.pnr.checkinTrip.destinationAirport.desc;
        this.departTime = data.pnr.checkinTrip.flightLegs[0].scheduledDepartureLocalDt.slice(11,16);
        this.arriveTime = data.pnr.checkinTrip.flightLegs[0].scheduledArrivalLocalDt.slice(11,16);
        this.flightNumber = data.pnr.checkinTrip.flightLegs[0].airlineCode+data.pnr.checkinTrip.flightLegs[0].flightNumber;
      })

   }

  ngOnInit() {
  }

  onSubmit(): void{
     
      this.router.navigate(['/loader']);
      setTimeout(() => {
        this.router.navigateByUrl('/getBoardingDocument');
      }, 2000);
    
  }

}
