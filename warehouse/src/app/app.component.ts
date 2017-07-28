import { Component } from '@angular/core';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShipOrderComponent } from './shipping/ship-order.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Northwind Traders Warehouse Mangement';
}
