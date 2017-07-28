import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-ship-order-lines',
  templateUrl: './ship-order-lines.component.html',
  styleUrls: ['./ship-order-lines.component.css']
})
export class ShipOrderLinesComponent implements OnInit {
  @Input()
  lines
  constructor(private _http: Http) { }

  ngOnInit() {
  }
  getBestLocation(orderLine) {
    const shipOrderApi = this._http.get(`/api/locations/forProduct/${orderLine.productID}`)
      .map(res => res.json());

    shipOrderApi.subscribe((proRes) => {
      for (let i = 0; i < this.lines.length; i++) {
        if (this.lines[i].productID === orderLine.productID) {
          this.lines[i].locationID = proRes[0].locationID;
        }
      }

    });


  }

}
