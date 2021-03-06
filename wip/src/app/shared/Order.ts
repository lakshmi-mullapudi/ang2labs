import { OrderLine } from "./OrderLine";
import { Customer } from "./Customer";

export class Order {
  orderID: number;
  customerID: String
  status: number;
  orderDate: Date;
  shipVia: string;
  shipping: number;
  tax: number;
  shipName: String;
  shipAddress: String;
  shipCity: String;
  shipRegion: String;
  shipPostalCode: String;
  shipCountry: String;
  lines: Array<OrderLine>;
  customer: Customer;

  // orderTotal():number {
  //   return this.lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
  // }
}