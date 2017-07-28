import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { Order } from '../shared/order';
import { OrderLine } from '../shared/orderLine';
import { Product } from '../shared/product';
import { Location } from '../shared/location';
import { Customer } from '../shared/customer';

@Component({
  selector: 'app-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css']
})
export class ShipOrderComponent implements OnInit {
  public order: Order;
  public orderID;


  constructor(private _http:Http) { }

  ngOnInit() {
    this.orderID=11067;
    this.order = new Order();
    this.order.orderID = 11063;
    this.order.orderDate = new Date();
    this.order.shipVia = 0;
    this.order.shipping = 10;
    this.order.shipName = "Ororo Monroe";
    this.order.shipAddress = "777 Placeholder Pl";
    this.order.shipCity = "Birnin Zana";
    this.order.shipRegion = "RG";
    this.order.shipCountry = "Wakanda";
    this.order.status = 0;
    this.order.lines = [];
    const line1 = new OrderLine();
    line1.locationID = null;
    line1.price = 30.00;
    line1.productID = 55;
    line1.quantity = 2;
    line1.picked=false;
    line1.product = new Product();
    line1.product.name = "Oreos";
    line1.product.imageUrl = "/assets/images/ProductImages/30.jpg";
    const line2 = new OrderLine();
    line2.locationID = null;
    line2.price = 30.00;
    line2.productID = 45;
    line2.quantity = 7;
    line1.picked=false;
    line2.product = new Product();
    line2.product.name = "Peanuts";
    line2.product.imageUrl = "/assets/images/ProductImages/54.jpg";
    const line3 = new OrderLine();
    line3.locationID = null;
    line3.price = 30.00;
    line3.productID = 67;
    line1.picked=false;
    line3.quantity = 8;
    line3.product = new Product();
    line3.product.name = "Onion Rings";
    line3.product.imageUrl = "/assets/images/ProductImages/51.jpg";
    this.order.lines.push(line1);
    this.order.lines.push(line2);
    this.order.lines.push(line3);
    console.log(this.order);

  }

 

  MarkAsShipped(order){
    this.order.status=1;
    let patchApi=this._http.patch("/api/orders/11069/markAsShipped","11069").toPromise();
    patchApi.then(
  (res)=>{ 
    console.log('order marked as shipped')},
  ()=>{console.log('order ')});



  }

  isOrderReady(){
      for (let i = 0; i < this.order.lines.length; i++) {
      if (this.order.lines[i].picked === true) {
        return true;
      }
    }
      
  }

  MarkWithProblem(order){
    const orderProblemApi = this._http.get("/api/orders/11069/")
      .map(res => res.json());

    orderProblemApi.subscribe((proRes) => {
      console.log(proRes);

    });
  }

}
