import { Component, OnInit } from '@angular/core';
import { OnlineCheckInService } from '../../onlinecheckin.service';

@Component({
  selector: 'app-check-in-confirmation',
  templateUrl: './check-in-confirmation.component.html',
  styleUrls: ['./check-in-confirmation.component.css']
})
export class CheckInConfirmationComponent implements OnInit {

  youAreNowCheckedIn; goToMyTrips; getYourBoardingPass; medallianUpgradeRequested; pleaseCheckDelta: {};
  nextSteps; getToTheAirport; recommendArrivalTime; forFlights; dropYourBag; alreadyCheckedBags: {};
  stillNeed; proceedToSecurity; proceedToSecurityWithBoarding; moreInfo; tsaGuideLines; airportInformation: {};
  tsaGuideLinesLink; airportInformationLink: {};

  recordLocatorId: string;
  firstName; lastName; num; seatNum: string;
  originAirport; destinationAirport; originAirportDesc; destinationAirportDesc; departTime; arriveTime; flightNumber: string;

  flight: string = "Value";

  constructor(private _OnlineCheckInService : OnlineCheckInService) {

    this._OnlineCheckInService.getCheckInContentAPI()
    .subscribe(data => 
      {

        this.youAreNowCheckedIn = data.checkInContentAPI[0].checkInConfirmation.youAreNowCheckedIn
        this.goToMyTrips = data.checkInContentAPI[0].checkInConfirmation.goToMyTrips
        this.getYourBoardingPass = data.checkInContentAPI[0].checkInConfirmation.getYourBoardingPass
        this.medallianUpgradeRequested = data.checkInContentAPI[0].checkInConfirmation.medallianUpgradeRequested
        this.pleaseCheckDelta = data.checkInContentAPI[0].checkInConfirmation.pleaseCheckDelta
        this.nextSteps = data.checkInContentAPI[0].checkInConfirmation.nextSteps
        this.getToTheAirport = data.checkInContentAPI[0].checkInConfirmation.getToTheAirport
        this.recommendArrivalTime = data.checkInContentAPI[0].checkInConfirmation.recommendArrivalTime
        this.forFlights = data.checkInContentAPI[0].checkInConfirmation.forFlights
        this.dropYourBag = data.checkInContentAPI[0].checkInConfirmation.dropYourBag
        this.alreadyCheckedBags = data.checkInContentAPI[0].checkInConfirmation.alreadyCheckedBags
        this.stillNeed = data.checkInContentAPI[0].checkInConfirmation.stillNeed
        this.proceedToSecurity = data.checkInContentAPI[0].checkInConfirmation.proceedToSecurity
        this.proceedToSecurityWithBoarding = data.checkInContentAPI[0].checkInConfirmation.proceedToSecurityWithBoarding
        this.moreInfo = data.checkInContentAPI[0].checkInConfirmation.moreInfo
        this.tsaGuideLines = data.checkInContentAPI[0].checkInConfirmation.tsaGuideLines
        this.airportInformation = data.checkInContentAPI[0].checkInConfirmation.airportInformation
        this.tsaGuideLinesLink = data.checkInContentAPI[0].checkInConfirmation.tsaGuideLinesLink
        this.airportInformationLink = data.checkInContentAPI[0].checkInConfirmation.airportInformationLink


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


}
