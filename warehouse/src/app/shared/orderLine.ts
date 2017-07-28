import { Product } from './product';
import { Location } from './location';

export class OrderLine {
    public quantity: number;
    public productID: number;
    public locationID: string;
    public price: number;
    public picked: boolean;
    public product: Product;
    public location: Location;
}