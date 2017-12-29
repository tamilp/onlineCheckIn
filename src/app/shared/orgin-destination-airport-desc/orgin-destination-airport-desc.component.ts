import { Component, OnInit, Input } from '@angular/core';
import { OnlineCheckInService } from '../../onlinecheckin.service';

@Component({
  selector: 'app-orgin-destination-airport-desc',
  templateUrl: './orgin-destination-airport-desc.component.html',
  styleUrls: ['./orgin-destination-airport-desc.component.css']
})
export class OrginDestinationAirportDescComponent implements OnInit {

  originAirport; destinationAirport; originAirportDesc; destinationAirportDesc: string;

  @Input('originAirportClass') originAirportClass: string;

  constructor(private _OnlineCheckInService : OnlineCheckInService) {

    this._OnlineCheckInService.getCheckIntAPI()
    .subscribe(data => 
      {

        this.originAirport = data.pnr.checkinTrip.originAirport.code;
        this.destinationAirport = data.pnr.checkinTrip.destinationAirport.code;
        this.originAirportDesc = data.pnr.checkinTrip.originAirport.desc;
        this.destinationAirportDesc = data.pnr.checkinTrip.destinationAirport.desc;
      
      })

   }

  ngOnInit() {
  }

}
