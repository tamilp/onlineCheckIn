import { Component, OnInit } from '@angular/core';
import { OnlineCheckInService } from '../../onlinecheckin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-get-boarding-document',
  templateUrl: './get-boarding-document.component.html',
  styleUrls: ['./get-boarding-document.component.css']
})
export class GetBoardingDocumentComponent implements OnInit {

  originAirportClass: string = "originAirportClass";

  checkInTitle; reviewTrip; getBoardingDocument; changeFlight; confirmation; next: {};
  flights; flightStatus; depart; arrive; upgradeRequested; inFlightServiceMessage; flightAirportDetails: {};
  passengers; deltaSkyMiles: {};
  seats; changeSeat: {};
  tripExtras; addTripExtras: {};
  bags; addBags; bagImg: {};

  serviceRequest; requestServiceMessage; addRequest: {};
  tripProtectionImg; tripProtection; for; currency; fare; peaceOfMind; buyNow; termsAndConditions: {};
  earnBonusMilesImg; earnBonusMiles; earnBonusMilesMessage; applyNow: {};

  pleaseChooseAnOption; getOneMobile; countryCode; andAreaCode; alsoSendToPrinter; sendToMobile; printOnePassNow; print; illGetMyDocumentsLater; youCanComeBackLater; printYourBoardingPass; viewInTheFlyDeltaApp; done: {}

  recordLocatorId: string;
  firstName; lastName; num; seatNum: string;
  originAirport; destinationAirport; originAirportDesc; destinationAirportDesc; departTime; arriveTime; flightNumber: string;

  flight: string = "Value";

  constructor(private _OnlineCheckInService : OnlineCheckInService, private router: Router) {

    this._OnlineCheckInService.getCheckInContentAPI()
    .subscribe(data => 
      {

        this.checkInTitle = data.checkInContentAPI[0].checkInTitleBar.checkInTitle
        this.reviewTrip = data.checkInContentAPI[0].checkInTitleBar.reviewTrip
        this.getBoardingDocument = data.checkInContentAPI[0].checkInTitleBar.getBoardingDocument
        this.changeFlight = data.checkInContentAPI[0].checkInTitleBar.changeFlight
        this.confirmation = data.checkInContentAPI[0].checkInTitleBar.confirmation
        this.next = data.checkInContentAPI[0].checkInTitleBar.next

        this.flights = data.checkInContentAPI[0].flights.flights
        this.flightStatus = data.checkInContentAPI[0].flights.flightStatus
        this.depart = data.checkInContentAPI[0].flights.depart
        this.arrive = data.checkInContentAPI[0].flights.arrive
        this.upgradeRequested = data.checkInContentAPI[0].flights.upgradeRequested
        this.inFlightServiceMessage = data.checkInContentAPI[0].flights.inFlightServiceMessage
        this.flightAirportDetails = data.checkInContentAPI[0].flights.flightAirportDetails

        this.passengers = data.checkInContentAPI[0].passengers.passengers
        this.deltaSkyMiles = data.checkInContentAPI[0].passengers.deltaSkyMiles

        this.seats = data.checkInContentAPI[0].seats.seats
        this.changeSeat = data.checkInContentAPI[0].seats.changeSeat

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

        

        this.pleaseChooseAnOption = data.checkInContentAPI[0].getBoardingDocument.pleaseChooseAnOption
        this.getOneMobile = data.checkInContentAPI[0].getBoardingDocument.getOneMobile
        this.countryCode = data.checkInContentAPI[0].getBoardingDocument.countryCode
        this.andAreaCode = data.checkInContentAPI[0].getBoardingDocument.andAreaCode
        this.alsoSendToPrinter = data.checkInContentAPI[0].getBoardingDocument.alsoSendToPrinter
        this.sendToMobile = data.checkInContentAPI[0].getBoardingDocument.sendToMobile
        this.printOnePassNow = data.checkInContentAPI[0].getBoardingDocument.printOnePassNow
        this.print = data.checkInContentAPI[0].getBoardingDocument.print
        this.illGetMyDocumentsLater = data.checkInContentAPI[0].getBoardingDocument.illGetMyDocumentsLater
        this.youCanComeBackLater = data.checkInContentAPI[0].getBoardingDocument.youCanComeBackLater
        this.printYourBoardingPass = data.checkInContentAPI[0].getBoardingDocument.printYourBoardingPass
        this.viewInTheFlyDeltaApp = data.checkInContentAPI[0].getBoardingDocument.viewInTheFlyDeltaApp
        this.done = data.checkInContentAPI[0].getBoardingDocument.done

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
        this.router.navigateByUrl('/checkInConfirmation');
      }, 2000);
    
  }

}
