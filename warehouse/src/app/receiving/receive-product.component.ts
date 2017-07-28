import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {
public showForm=false;
public receivedProducts: Array<Product> =[];
public receivedProduct:Product;
  constructor(private _http: Http) { }

  ngOnInit() {
    this.receivedProduct= new Product();
    
  }

  ReceivingShowForm(trackingNum){
    if(trackingNum.controls.trackingNumber.value){
      this.showForm=true;
    }
    
  }

  ReceiveProduct(productInf){
    const recieveProductApi = this._http.get(`/api/products/${productInf.controls.productID.value}`)
      .map(res => res.json());

    recieveProductApi.subscribe((result) => {
      this.receivedProducts.push(result);
      console.log(result);
      console.log(this.receivedProducts);
      

    });
    // this.receivedProduct.productID=productInf.controls.productID.value;
    // this.receivedProduct.quantity=productInf.controls.quantity.value;
    // this.receivedProducts.push(this.receivedProduct);
  }

}
