import { Component, OnInit } from '@angular/core';
import { OnlineCheckInService } from '../../onlinecheckin.service';

@Component({
  selector: 'app-main-content-header',
  templateUrl: './main-content-header.component.html',
  styleUrls: ['./main-content-header.component.css']
})
export class MainContentHeaderComponent implements OnInit {

checkInTitle; reviewTrip; getBoardingDocument; reviewTripOne; getBoardingDocumentTwo: {};
  

  constructor(private _OnlineCheckInService : OnlineCheckInService) {

    this._OnlineCheckInService.getCheckInContentAPI()
    .subscribe(data => 
      {

        this.checkInTitle = data.checkInContentAPI[0].checkInTitleBar.checkInTitle
        this.reviewTrip = data.checkInContentAPI[0].checkInTitleBar.reviewTrip
        this.reviewTripOne = data.checkInContentAPI[0].checkInTitleBar.reviewTripOne
        this.getBoardingDocument = data.checkInContentAPI[0].checkInTitleBar.getBoardingDocument
        this.getBoardingDocumentTwo = data.checkInContentAPI[0].checkInTitleBar.getBoardingDocumentTwo
        
      })

   }

  ngOnInit() {
  }

}
