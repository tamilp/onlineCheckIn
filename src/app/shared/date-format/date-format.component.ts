import { Component, OnInit, Input } from '@angular/core';
import { OnlineCheckInService } from '../../onlinecheckin.service';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.css']
})
export class DateFormatComponent implements OnInit {
  @Input() dateFormat : string;

  getDateFormat: {};

  constructor(private _OnlineCheckInService : OnlineCheckInService) {

    this._OnlineCheckInService.getCheckIntAPI()
    
    .subscribe(data => 
      {
        //console.log(data.pnr.checkinTrip.flightLegs[0].scheduledDepartureLocalDt.slice(0, 10) + "dateFormat");
        var dateResponse = data.pnr.checkinTrip.flightLegs[0].scheduledDepartureLocalDt.slice(0,10)
        this.getDateFormat = new Date(JSON.stringify(dateResponse));
      })
   }

  ngOnInit() {
  }

}
