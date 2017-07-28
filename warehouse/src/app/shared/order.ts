import { Customer } from './customer';
import { OrderLine } from './orderLine';

export class Order {
        public orderID: number;
        public customerID: number;
        public status: number;
        public orderDate: Date;
        public shipVia: number;
        public shipping: number;
        public tax: number;
        public shipName: string;
        public shipAddress: string;
        public shipCity: string;
        public shipRegion: string;
        public shipPostalCode: string;
        public shipCountry: string;
        public lines: Array<OrderLine>;
        public customer: Customer
}