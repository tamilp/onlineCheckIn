import { Component, OnInit } from '@angular/core';
import { OnlineCheckInService } from '../../onlinecheckin.service';

@Component({
  selector: 'app-check-in-title',
  templateUrl: './check-in-title.component.html',
  styleUrls: ['./check-in-title.component.css']
})
export class CheckInTitleComponent implements OnInit {


checkInTitle: {};
 
  constructor(private _OnlineCheckInService : OnlineCheckInService) {

    this._OnlineCheckInService.getCheckInContentAPI()
    .subscribe(data => 
      {
        this.checkInTitle = data.checkInContentAPI[0].checkInTitleBar.checkInTitle
      })

   }

  ngOnInit() {
  }

}
