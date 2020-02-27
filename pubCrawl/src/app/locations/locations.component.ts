import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(){
    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    });
  }

}
