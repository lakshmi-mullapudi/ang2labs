import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-orders',
  templateUrl: './list-of-orders.component.html',
  styleUrls: ['./list-of-orders.component.css']
})
export class ListOfOrdersComponent implements OnInit {
@Input()
orders
  constructor() { }

  ngOnInit() {
  }

}
