import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { OnlineCheckInComponent } from './online-check-in/online-check-in.component';
import { DateFormatComponent } from './shared/date-format/date-format.component';

import { OnlineCheckInService } from "./onlinecheckin.service";
import { GetBoardingDocumentComponent } from './online-check-in/get-boarding-document/get-boarding-document.component';
import { MainContentHeaderComponent } from './shared/main-content-header/main-content-header.component';
import { ReviewTripComponent } from './online-check-in/review-trip/review-trip.component';
import { CheckInConfirmationComponent } from './online-check-in/check-in-confirmation/check-in-confirmation.component';
import { CheckInTitleComponent } from './shared/check-in-title/check-in-title.component';
import { OrginDestinationAirportDescComponent } from './shared/orgin-destination-airport-desc/orgin-destination-airport-desc.component';
import { CheckInLoaderComponent } from './shared/check-in-loader/check-in-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    OnlineCheckInComponent,
    DateFormatComponent,
    GetBoardingDocumentComponent,
    MainContentHeaderComponent,
    ReviewTripComponent,
    CheckInConfirmationComponent,
    CheckInTitleComponent,
    OrginDestinationAirportDescComponent,
    CheckInLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'reviewTrip',component:ReviewTripComponent},
      {path:'getBoardingDocument',component:GetBoardingDocumentComponent},
      {path:'checkInConfirmation',component:CheckInConfirmationComponent},
      {path:'loader',component:CheckInLoaderComponent},
      {path:'',redirectTo:'reviewTrip',pathMatch:'full'},
      {path:'**',redirectTo:'reviewTrip',pathMatch:'full'}
    ])
  ],
  providers: [OnlineCheckInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
